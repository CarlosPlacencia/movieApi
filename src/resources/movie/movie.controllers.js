import { Movie } from "./movie.model";

export const filter = async (req, res) => {
    // get the parameters passed inside req.query
    let {title, sort, limit, page} = req.query;

    // check if they have a value or assign a default value
    title = (title != null) ? title : '';
    sort = (sort != null) ? sort : 'popularity:desc';
    limit = (limit > 0) ? limit : 9;
    page = (page > 0) ? page : 1;

    let query = Movie.find();

    //Title Config
    if(title != ''){
        query = query.regex('title', new RegExp(title, 'i'));
    }


    // Pagination Config
    limit = parseInt(limit);
    page = parseInt(page);

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    if(endIndex < await Movie.countDocuments().exec()){
        results.next = {
            page: page + 1,
            limit: limit
        }
    }

    if(startIndex > 0){
        results.previous = {
            page: page - 1,
            limit: limit
        }
    }

    query = query.limit(limit).skip(startIndex);


    // Sorting Config
    const sortableColumns = ['title', 'popularity', 'releaseDate', 'runtime'];

    let [column, order] = sort.split(':');

    if(!sortableColumns.includes(column)) res.status(400).json("Invalid sort column");
    if(order !== 'asc' && order != 'desc') res.status(400).json("Invalid sort order");

    if(order === 'asc'){
        query = query.sort(`${column}`); // ascending order
    } else{
        query = query.sort(`-${column}`); // descending order
    }
    

    // execute the query
    try{
        results.results = await query.exec();
        res.status(200).json({results})
        
    } catch (e) {
        console.log(e);
        res.status(400).json("Somethign went wrong");
    }
}
