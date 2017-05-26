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
      // Products::destroy($id);
      $val = $_REQUEST['quantity'];
      $id = $_REQUEST['id'];

      // var_dump($_REQUEST);

      // Products::table('products')
      //   ->where("id",$id)
      //   ->update(['quantity'=> $val]);

        // Products::RAW('UPDATE products SET quantity = '.$val.' WHERE id ='.$id.';');
        // $products = Products::INSERT('INSERT INTO products (quantity) VALUES (1)');
        // var_dump($products);

        // Products::where('id', 7)->update(['quantity'=>15]);
        Products::where('id', $id)->update(['quantity'=>$val]);
        // return 'success';


      ///  Products::table('products')
          //  ->where('id', 7)
          //  ->update(['quantity' => 3]);

      // DB::table('users')
      //       ->where('id', 1)
      //       ->update(['votes' => 1]);

      // return view('welcome');


    }

}
