<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>
    </head>
    <body>
        <table>
            <th>
                <td>ID</td>
                <td>Name</td>
                <td>Email</td>
                <td>Website</td>
                <td>Logo</td>
            </th>
            @foreach($empresas as $empresa)
                <tr>
                    <td>{{ $empresa->id }}</td>
                    <td>{{ $empresa->name }}</td>
                    <td>{{ $empresa->email }}</td>
                    <td>{{ $empresa->website }}</td>
                    <td>{{ $empresa->logo }}</td>
                </tr>
            @endforeach
        </table>
       
    </body>
</html>
