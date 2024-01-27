function savePreferences() {
    const form = document.getElementById('customerForm');
    const customerName = form.elements['customerName'].value;
    const customerEmail = form.elements['customerEmail'].value;
    const customerAddress = form.elements['customerAddress'].value;
    const isVegetarian = form.elements['vegetarian'].checked;
    const hasGlutenAllergy = form.elements['glutenAllergy'].checked;
    const organicPreference = form.elements['organicPreference'].value;

 
    console.log('Customer Name:', customerName);
    console.log('Customer Email:', customerEmail);
    console.log('Customer Address:', customerAddress);
    console.log('Is Vegetarian:', isVegetarian);
    console.log('Has Gluten Allergy:', hasGlutenAllergy);
    console.log('Organic Preference:', organicPreference);

    form.reset();
}
