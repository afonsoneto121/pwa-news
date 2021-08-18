export default function clean(values) {
  return values.filter((value) => value.urlToImage != null
            && value.description != null )
}
