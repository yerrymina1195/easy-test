<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateClientRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'nom' => 'string', // Le nom n'est pas obligatoire lors de la mise à jour
            'email' => 'email|unique:clients,email,' . $this->id, // Vérifiez l'unicité de l'e-mail en excluant l'enregistrement actuel
            'telephone' => 'nullable|string',
            'date_de_naissance' => 'nullable|date',
        ];
    }
}
