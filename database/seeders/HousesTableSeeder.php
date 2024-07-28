<?php

namespace Database\Seeders;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Str;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class HousesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $csvFile = base_path('data/houses.csv');
        $data = $this->readCSV($csvFile);

        foreach ($data as $row) {
            $row = array_change_key_case($row, CASE_LOWER);

            DB::table('houses')->insert([
                'name' => $row['name'],
                'bedrooms' => $row['bedrooms'],
                'bathrooms' => $row['bathrooms'],
                'storeys' => $row['storeys'],
                'garages' => $row['garages'],
                'price' => $row['price'],
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }

    private function readCSV($csvFile)
    {
        $file_handle = fopen($csvFile, 'r');
        $header = null;
        $data = [];

        while (($row = fgetcsv($file_handle, 0, ',')) !== false) {
            if (!$header) {
                $header = $row;
            } else {
                $data[] = array_combine($header, $row);
            }
        }

        fclose($file_handle);
        return $data;
    }
}
