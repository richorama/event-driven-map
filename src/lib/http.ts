const send = (method: string, url: string, body?: any) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    xhr.open(method, url, true)
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.setRequestHeader('Accept', 'application/json')

    xhr.onload = () => {
      try {
        if (xhr.status >= 400) return reject(xhr.status)
        resolve(JSON.parse(xhr.responseText || 'null'))
      } catch (e) {
        reject(e)
      }
    }

    xhr.onerror = reject

    xhr.send(body ? JSON.stringify(body) : undefined)
  })
}

const get = (url: string) => send('GET', url)

function getT<T>(url: string): Promise<T> {
  return new Promise<T>((resolve, reject) => {
    get(url)
      .then(data => resolve(data as T))
      .catch(reject)
  })
}

export const getGeojson = (): Promise<any> =>
  getT<any>('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson')