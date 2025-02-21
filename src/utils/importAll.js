export default function importAll(r) {
    // console.log(r)

    let images = {}
    r.keys().map((item, index) => {
        images[item.replace('./', '')] = r(item)
    })
    return images
}
