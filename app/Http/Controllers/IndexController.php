<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SystemSetting;
use Illuminate\Support\Facades\DB;
class IndexController extends Controller
{
    public function index()
    {
        
        return view('index');
    }

    public function getBookClassifyOfSys(){
        $systemSettings = new SystemSetting();
        $bookClassify = $systemSettings->where('TxtSettingName', 'bookClassify')->get();

        $bookClassifySys = [];
        foreach($bookClassify as $classifyInfo){
            $bookClassifySys[$classifyInfo->IntSettingVal] = $classifyInfo->TxtSettingName;
        }
        return $bookClassifySys;
    }
}
