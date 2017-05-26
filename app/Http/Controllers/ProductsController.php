<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Products;
class ProductsController extends Controller
{
    //

    public function index() {
      return view('welcome',compact('products'));
    }

    public function add() {
      Products::insert(['name'=>$_REQUEST["name"], 'quantity'=>$_REQUEST["quantity"],'categories'=>$_REQUEST["category"]]);
      header('location:/');
    }

    public function delete($id) {
      Products::destroy($id);
      header('location:/');
    }

    public function update() {
      $n = $_REQUEST['name'];
      $c = $_REQUEST['category'];
      $q = $_REQUEST['quantity'];
      $id = $_REQUEST['id'];

      Products::where('id', $id)->update(['name'=>$n, 'categories'=>$c, 'quantity'=>$q,]);
    }

}
