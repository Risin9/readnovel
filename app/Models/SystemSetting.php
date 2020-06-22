<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class SystemSetting extends Model
{
    /**
     * 指定表
     */
    protected $table = "system_settings";
    /**
     * 指示是否自动更新时间戳
     */
    public $timestamps = true;

    /**
     * 模型属性默认值
     */
    protected $attributes = [
        'IsActive' => 1
    ];

}
