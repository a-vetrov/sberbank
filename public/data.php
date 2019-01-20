<?php
/**
 * Created by Andrey Vetrov
 */

require_once './faker/autoload.php';

header('Content-type: application/json');


function getTitle($faker) {
    //"Visa Infinite Сбербанк Первый"
    $type1 = ['Visa ', 'MasterCard '] ;
    $type2 = ['Infinite ', 'Gold ', 'Silver '] ;
    $type3 = ['Первый', 'Второй', 'Третий'] ;
    return $faker->randomElement($type1).$faker->randomElement($type2).'Сбербанк '.$faker->randomElement($type3) ;
}

function getDescription($faker) {
    $paragraphs = $faker->paragraphs($faker->numberBetween(1,4)) ;
    return join("\n", $paragraphs) ;
}

function getFakeDate($faker) {
    return $faker->dateTimeBetween('+1 years', '+5 years')->format('d-m-Y') ;
}

$faker = Faker\Factory::create();
$currencyArr = ["USD", "RUR", "EUR"] ;

$array = array();

for ($index = 0; $index <= 100; $index++) {
    $card = array("id" => (string)$index) ;
    $card["cardNumber"] = (string)$faker->unique()->randomNumber(4, true) ;
    $card["currency"] = $faker->randomElement($currencyArr) ;
    $card["title"] = getTitle($faker) ;
    $card["amount"] = (string)$faker->numberBetween(1000,10000000) ;
    $card["description"] = getDescription($faker) ;
    $card["dueDate"] = getFakeDate($faker) ;
    $array[$index] = $card ;

}

$cards = array("cards"=>$array);

echo json_encode($cards, JSON_UNESCAPED_UNICODE);