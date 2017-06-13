<?php

namespace Testing\Calculator;


use PHPUnit\Framework\TestCase;

class CalculatorTest extends TestCase
{
    /**
     * @dataProvider getSumCasesProvider
     */
    public function testSum($suma, $sumb, $expectedResult)
    {
        $calculator = new Calculator();
        $result = $calculator->sum($suma, $sumb);
        $this->assertEquals(
            $expectedResult,
            $result,
            "This result is not expected for the operation ".$suma." + ".$sumb." = ".$result."(expected: ".$expectedResult.")"
        );
    }

    public function getSumCasesProvider()
    {
        $file = file(__DIR__.'/sum_test_cases.csv');
        $dataSet = array_map(function($input){
            return array_map('intval', explode(";", $input));
        }, $file);
        return $dataSet;
    }
}
