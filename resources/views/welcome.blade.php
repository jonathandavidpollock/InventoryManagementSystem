<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Title</title>
    <link rel="stylesheet" href="css/app.css">
  </head>
  <body>
    <header>
      <!-- <h1>Logo</h1> -->
      <h1 class="logo">
        <img src="images/logo.svg" alt="Logo">
        <span>App Name</span>
      </h1>
      <nav id="menu">
        <ul>
          <li>
            <button id="addBtn" class="btn add good">
            <i class="fa fa-plus-circle" aria-hidden="true"></i>  add
            </button>
          </li>
        </ul>
      </nav>
    </header>

    <main id="search-form" style="padding-top:60px;">

      {{-- <form action="">
        <input type="text" name="keyword" id="keyword" placeholder="Search here">
        <button class="btn magnifyglass"><i class="fa fa-search" aria-hidden="true" ></i></button>
      </form> --}}

    </main>

    <section id="results">

        <ul class="table">
          <li class="row hide-mediumAndLess">
            <ul class="table-head">
              <li class="col">Product</li>
              <li class="col">Category</li>
              <li class="col">Amount</li>
              <li class="col col-small"></li>
              <li class="col col-small"></li>
            </ul>
          </li>

          @foreach ($products as $product)
          <li class="row">
            <ul class="field">
              <li class="col">
                <span class="title show-mediumAndLess">Name:</span>
                <div class="name" contenteditable="false">{{$product->name}}</div>
              </li>
              <li class="col">
                <span class="title show-mediumAndLess">Category:</span>
                <div class="category" contenteditable="false">{{$product->categories}}</div>
              </li>
              <li class="col">
                <span class="title show-mediumAndLess">Amount:</span>
                <div class="quantity" contenteditable="false">{{$product->quantity}}</div>
              </li>
              <li class="col col-small">
                <button id="btnEdit" data-id={{$product->id}} class="btn add alert button">
                <i class="fa fa-pencil" aria-hidden="true"></i>  edit
                </button>
              </li>
              <li class="col col-small">

              <button onclick="location.href='/products/delete/{{$product->id}}'" class="btn add bad delete" data-id={{$product->id}}>
                <span class="icon">
                <i class="fa fa-trash" aria-hidden="true"></i>delete
              </button>


              </li>
            </ul>
          </li>

          @endforeach
        </ul>
    </section>
    <section id="analytics">

      <div class="weekView">
        <h2>Category breakdown</h2>
        <div class="chartWrapper">
          <canvas id="weekChart"></canvas>
        </div>
      </div>
      <div class="monthView">
        <h2>Inventory Breakdown</h2>
        <div class="chartWrapper">
          <canvas id="monthChart"></canvas>
        </div>
      </div>


    </section>

  <!-- Add Modal -->
  <div class="modal-wrapper">
   <div class="modal add-modal">
      <h3>Add Items</h3>
      <form action="products/add" method="GET" enctype="text/plain" class="md-form">
          {{ csrf_field() }}
        <label>Name
          <input id="cus" name="name" type="text" id="name">
        </label>
        <label>Category
          <select name="category">
             <option value="1">Vegetables</option>
             <option value="2">Fruits</option>
          </select>
        </label>
        <label>Quantity
          <input type="number" name="quantity">
        </label>
        <p>
          <button type="submit" class="btn good cus-btn">Add</button>
          <button id="btnCancel" class="btn bad">Cancel</button>
        </p>

      </form>
    </div>
  </div>


  <script
    src="https://code.jquery.com/jquery-3.2.1.min.js"
    integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.bundle.min.js"></script>
  <script src="js/app.js" charset="utf-8"></script>
  <script type="text/javascript">


  /// Analytics Code  ////////////////////////////////////////////////////////

  var labels1 = [];
  var totals1 = [];

  @foreach ($data as $f)
    labels1.push({{$f->categories}});
    totals1.push({{$f->TOTAL}});
    // addValuesChart({{$f->categories}}, {{$f->TOTAL}})
  @endforeach

  var labels2 = [];
  var totals2 = [];

  @foreach ($products as $p)
    labels2.push('{{$p->name}}');
    totals2.push({{$p->quantity}});
    // addValuesChart({{$f->categories}}, {{$f->TOTAL}})
  @endforeach

  var ctx = document.getElementById("weekChart").getContext('2d');
  var ctx2 = document.getElementById("monthChart").getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: labels1,
          datasets: [{
              data: totals1,
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
              borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
              borderWidth: 1
          }]
      }

  });

  var myChart2 = new Chart(ctx2, {
      type: 'bar',
      data: {
          labels: labels2,
          datasets: [{
              label: '# of Votes',
              data: totals2,
              backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
              borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
              borderWidth: 1
          }]
      },
      options: {
              scales: {
                  yAxes: [{
                      ticks: {
                          beginAtZero: true
                      }
                  }]
              }
          }
  });


  function addValuesChart(labels, values) {
      myChart.data.labels[0] = values;
      myChart.data.datasets[0].data = labels;
      myChart.update();
  }

  function addValuesChart2(values, labels) {
      myChart2.data.datasets[0].labels = values;
      myChart2.data.datasets[0].data = labels;
      myChart2.update();
  }

  myChart.data.datasets[0].labels = labels;
  myChart.data.datasets[0].data = totals;


  </script>
</html>
