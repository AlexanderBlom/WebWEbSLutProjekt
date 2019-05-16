<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="canonical" href="https://getbootstrap.com/docs/4.3/examples/album/">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="/css/style.css">
    <style>
            .bd-placeholder-img {
              font-size: 1.125rem;
              text-anchor: middle;
              -webkit-user-select: none;
              -moz-user-select: none;
              -ms-user-select: none;
              user-select: none;
            }
      
            @media (min-width: 768px) {
              .bd-placeholder-img-lg {
                font-size: 3.5rem;
              }
            }
    </style>
    <link href="album.css" rel="stylesheet">
    <title>Ackord YO!</title>
</head>
<body>
    <main role="main">
        <div class="album py-1 bg-light">
          <div class="container">
            <canvas id="canvas"></canvas>
              <div class="row mt-5 justify-content-center">
                <div class="col-md-2">
                  <div class="card mb-3 p-1">
                    <div class="card-body">
                      <div class="justify-content-between align-items-center">
                        <div class="btn-group">
                          <button id="aChord" value="1" type="submit" class="btn btn-md btn-outline-secondary">View A chord</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-2">
                  <div class="card mb-3 p-1">
                      <div class="card-body">
                          <div class="justify-content-between align-items-center">
                              <div class="btn-group">
                                  <button id="bChord" value="2" type="submit" class="btn btn-md btn-outline-secondary">View B chord</button>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-3 p-1">
                        <div class="card-body">
                            <div class="justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button id="cChord" value="3" type="button" class="btn btn-md btn-outline-secondary">View C chord</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                  <div class="card mb-3 p-1">
                    <div class="card-body">
                      <div class="justify-content-between align-items-center">
                        <div class="btn-group">
                          <button id="dChord" value="4" type="submit" class="btn btn-md btn-outline-secondary">View D chord</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row justify-content-center">
                <div class="col-md-2">
                  <div class="card mb-3 p-1">
                      <div class="card-body">
                          <div class="justify-content-between align-items-center">
                              <div class="btn-group">
                                  <button id="eChord" value="5" type="submit" class="btn btn-md btn-outline-secondary">View E chord</button>
                              </div>
                          </div>
                      </div>
                  </div>
                </div>
                <div class="col-md-2">
                    <div class="card mb-3 p-1">
                        <div class="card-body">
                            <div class="justify-content-between align-items-center">
                                <div class="btn-group">
                                    <button id="fChord" value="6" type="button" class="btn btn-md btn-outline-secondary">View F chord</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-2">
                  <div class="card mb-3 p-1">
                    <div class="card-body">
                      <div class="justify-content-between align-items-center">
                        <div class="btn-group">
                          <button id="gChord" value="7" type="submit" class="btn btn-md btn-outline-secondary">View G chord</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    <script src="/js/canvas.js"></script>
</body>
</html>