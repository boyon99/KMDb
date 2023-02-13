
let KMDB_API_KEY = process.env.API_KEY // key prameter

let title = decodeURI("외계+인")
let listCount = 10;

const url = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${KMDB_API_KEY}&query=${title}&listCount=${listCount}`

console.log(url)

fetch(url)
  .then(response => response.json())
  .then(function (item) { 
    // api를 리스트에 담기
    let search_movie_list = item
    console.log(item)
    console.log(item.Data)
    console.log(item.Data[0].Result[0])

    console.log("title: " + item.Data[0].Result[0].title)
    console.log("plot: "+item.Data[0].Result[0].plots.plot[0])
    console.log("genre: "+item.Data[0].Result[0].genre)
    console.log("directors: "+item.Data[0].Result[0].directors)
    console.log("nation: "+item.Data[0].Result[0].nation)
    console.log("actors: "+item.Data[0].Result[0].actors)
    console.log("runtime: "+item.Data[0].Result[0].runtime)
    console.log("keywords: "+item.Data[0].Result[0].keywords)
    console.log("rating: "+item.Data[0].Result[0].rating)
    console.log("posters: "+item.Data[0].Result[0].posters)
    console.log("stills poster: "+item.Data[0].Result[0].stlls)
    console.log("vod: "+item.Data[0].Result[0].vods)

  });


