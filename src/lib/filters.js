export function filter_by(arr, props) {
  let filtered_repos = []
  if (props.name) filtered_repos = arr.filter((repo) => repo.name.includes === props.name)
  if (props.description) filtered_repos = arr.filter((repo) => repo.description.includes(props.name))
  if (props.topics) filtered_repos = arr.filter((repo) => repo.topics.include(props.name))
  if (props.archived) filtered_repos = arr.filter((repo) => repo.archived === props.archived)
  if (props.language) filtered_repos = arr.filter((repo) => repo.language === props.language)
  return filtered_repos
}

export function get_all_topics(arr) {
  return new Set(
    [].concat.apply(
      [],
      arr.map((repo) => repo.topics),
    ),
  )
}
export function get_all_languages(arr) {
  return new Set(arr.map((repo) => repo.language))
}
