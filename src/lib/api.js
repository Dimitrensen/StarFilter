// https://api.github.com/users/alpap/starred?page=12
import axios from 'axios'

const url = 'https://api.github.com/users/USER/starred?page='

async function getStarred(user, itterations) {
  const calls = []
  for (let index = 0; index < itterations; index++) {
    try {
      calls.push(await axios.get(url.replace('USER', user) + index))
    } catch (e) {
      console.log(e)
    }
  }
  const call_array = await Promise.all(calls)
  const data_arrays = call_array.map((d) => d.data)
  const single_Data_array = [].concat.apply([], data_arrays)
  return single_Data_array.map((d) => filter_data(d))
}

function filter_data(data) {
  return {
    name: data.name,
    description: data.description,
    open_issues: data.open_issues_count,
    toics: data.topics,
    license: data.license,
    archived: data.archived,
    language: data.language,
    full_name: data.full_name,
    html_url: data.html_url,
    stargazers_count: data.stargazers_count,
    homepage: data.homepage,
  }
}
getStarred('alpap', 13).then((res) => console.log(res.length))
