const rad = x => x * Math.PI / 180

const EARTH_RADIUS = 6378137

export default {
  getDistance(point1, point2) {
    const dLat = rad(point2.lat - point1.lat)
    const dLong = rad(point2.lng - point1.lng)

    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
      + Math.cos(rad(point1.lat)) * Math.cos(rad(point2.lat))
      * Math.sin(dLong / 2) * Math.sin(dLong / 2)

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

    return EARTH_RADIUS * c
  },
}
