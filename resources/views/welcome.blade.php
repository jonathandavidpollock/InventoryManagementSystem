<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
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

    <main id="search-form">

      <form action="">
        <input type="text" name="keyword" id="keyword" placeholder="Search here">
        <button class="btn magnifyglass"><i class="fa fa-search" aria-hidden="true" ></i></button>
      </form>

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
                {{$product->name}}
              </li>
              <li class="col">
                <span class="title show-mediumAndLess">Category:</span>
                {{$product->categories}}
              </li>
              <li class="col">
                <span class="title show-mediumAndLess">Amount:</span>
                {{$product->quantity}}
              </li>
              <li class="col col-small">
                <button id="btnEdit" data-id={{$product->id}} class="btn add alert">
                <i class="fa fa-pencil" aria-hidden="true"></i>  edit
                </button>
              </li>
              <li class="col col-small">
                {{-- <a href="/products/delete/{{$product->id}}">del</a> --}}
                <button onclick="location.href='/products/delete/{{$product->id}}'" class="btn add bad" data-id={{$product->id}}>
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
        <h2>Week View</h2>
        <div class="chartWrapper">
          <canvas id="weekChart"></canvas>
        </div>
      </div>
      <div class="monthView">
        <h2>Month View</h2>
        <div class="chartWrapper">
          <canvas id="monthChart"></canvas>
        </div>
      </div>


    </section>

  <!-- Add Modal -->
  <div class="modal-wrapper">
   <div class="modal add-modal">
      <h3>Add Items</h3>
      <form action="products/1" method="POST" class="md-form">
        <label>Name
          <input id="cus" type="text" id="name">
        </label>
        <label>Category
          <select>
             <option value="Vegetables">Vegetables</option>
             <option value="Fruits">Fruits</option>
          </select>
        </label>
        <label>Quantity
          <input type="number" name="quantity">
        </label>
        <p><button type="submit" class="btn good cus-btn">Add</button>
        <button id="btnCancel" class="btn bad">Cancel</button></p>
        <a href="#" id="linkDelete">Delete</a>
      </form>
    </div>
  </div>
  <!-- Delete Modal -->
  <div class="modal-del-wrapper">
    <div class="eModal add-modal">
      <form action="" class="md-edit-form">
        <h3 class="del">Delete</h3>
        <!-- <span class="close-model"><i class="fa fa-times" aria-hidden="true"></i></span> -->
        <i class="cus-i fa fa-times-circle-o" aria-hidden="true"></i>
        <p>Are you sure?</p>
        <input type="text" placeholder="Delete">
        <button class="btn bad"><i class="fa fa-minus" aria-hidden="true"></i></button>
      </form>
    </div>
  </div>
  </body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.5.0/Chart.bundle.min.js"></script>
  <script src="js/app.js" charset="utf-8"></script>
</html>
