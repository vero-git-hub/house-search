<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class HouseController extends Controller
{
    /**
     * Handle the incoming request for searching houses.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function search(Request $request): \Illuminate\Http\JsonResponse
    {
        $query = DB::table('houses');

        if ($request->filled('name')) {
            $query->where('name', 'like', '%' . $request->input('name') . '%');
        }

        if ($request->filled('bedrooms')) {
            $query->where('bedrooms', $request->input('bedrooms'));
        }

        if ($request->filled('bathrooms')) {
            $query->where('bathrooms', $request->input('bathrooms'));
        }

        if ($request->filled('storeys')) {
            $query->where('storeys', $request->input('storeys'));
        }

        if ($request->filled('garages')) {
            $query->where('garages', $request->input('garages'));
        }

        if ($request->filled('priceMin')) {
            $query->where('price', '>=', $request->input('priceMin'));
        }

        if ($request->filled('priceMax')) {
            $query->where('price', '<=', $request->input('priceMax'));
        }

        $houses = $query->get();

        return response()->json($houses);
    }
}
