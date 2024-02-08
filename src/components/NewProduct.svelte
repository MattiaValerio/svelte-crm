<form method="POST" action="?/addProduct">
    <div>
        <label for="name">Codice</label>
        <input type="text" name="name" class="border">
    </div>
    <div>
        <label for="description">Descrizione</label>
        <textarea name="description" id="descriptionProd" cols="30" rows="10" class="border"/>
    </div>
    <div>
        <label for="price">Prezzo</label>
        <input type="number" min="1" step="any" name="price" class="border">
    </div>
    <div>
        <label for="available">Disponibile</label>
        <input type="checkbox" name="available" class="border">
    </div>
    <div>
        <label for="category">Categoria</label>
        <input type="text" name="categoriesId" class="border">
    </div>

    <button type="submit">ADD</button>
</form>