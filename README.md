# [BenchBnB][site]

[Live][site]
[site]: http://bench-bnb-in.herokuapp.com/

![screenshot]
[screenshot]: http://res.cloudinary.com/dms46o1eu/image/upload/c_scale,w_750/v1451967741/bench_bnb_pdccks.gif

BenchBnB is a project that integrates the GoogleMaps API. It is inspired by AirBnB.

### Features

- Single page web-application, built on `Rails`, `React.js/FLUX`, `ReactRouter`, and the `GoogleMaps` API.
- Click on the map to create a new `Bench` at the specified `coordinates`.
- Moving the map causes the viewable `boundaries` to change. Bench markers along with their respective information will be not be displayed if they are out of the map's current visible boundaries.
- `Filter` by `min` and `max` seating to display benches with seating capacities within the by specified restrictions.

### ToDo

- [x] Bring it to life
- [x] Apply `filters` for bench seating capacity
- [x] Add a `Bench` show page and integrate image upload
- [x] Add `Reviews` for benches
- [] Add `Rating Stars` for reviews
