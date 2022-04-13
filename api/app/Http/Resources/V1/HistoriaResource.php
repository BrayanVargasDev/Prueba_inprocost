<?php

namespace App\Http\Resources\V1;

use Illuminate\Http\Resources\Json\JsonResource;

class HistoriaResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'descripcion' => $this->Descripcion,
            'id_usuario' => $this->id_usuario,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
