// Function to convert a number to words in Bengali
// This function converts a number to its equivalent word representation in Bengali.
function numberToWords(num) {
    const a = [
        '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
        'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen'
    ];
    const b = ['', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety'];

    if (num === 0) return 'Zero';
    if (num < 20) return a[num];
    if (num < 100) return b[Math.floor(num / 10)] + (num % 10 !== 0 ? ' ' + a[num % 10] : '');
    if (num < 1000) return a[Math.floor(num / 100)] + ' Hundred' + (num % 100 !== 0 ? ' and ' + numberToWords(num % 100) : '');
    if (num < 100000) return numberToWords(Math.floor(num / 1000)) + ' Thousand' + (num % 1000 !== 0 ? ' ' + numberToWords(num % 1000) : '');
    if (num < 10000000) return numberToWords(Math.floor(num / 100000)) + ' Lakh' + (num % 100000 !== 0 ? ' ' + numberToWords(num % 100000) : '');
    return numberToWords(Math.floor(num / 10000000)) + ' Crore' + (num % 10000000 !== 0 ? ' ' + numberToWords(num % 10000000) : '');
}
// Function to convert a Gregorian date to Bengali calendar date
// The Bengali calendar is a lunisolar calendar used in the Indian subcontinent, primarily in Bangladesh and the Indian state of West Bengal.
function convertToBengaliCalendar(year, month, day) {
    // Convert Gregorian date to Bengali calendar date using base date 15-04-2025 as 1-Boishakh-1432
    const bengaliMonths = [
        "বৈশাখ", "জ্যৈষ্ঠ", "আষাঢ়", "শ্রাবণ", "ভাদ্র", "আশ্বিন",
        "কার্তিক", "অগ্রহায়ণ", "পৌষ", "মাঘ", "ফাল্গুন", "চৈত্র"
    ];
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    const baseGregorianDate = new Date(2025, 3, 15); // 15-April-2025
    const baseBengaliYear = 1432;
    const baseBengaliMonth = 1; // Boishakh
    const baseBengaliDay = 1;

    const inputDate = new Date(year, month - 1, day);
    const diffInDays = Math.floor((inputDate - baseGregorianDate) / (1000 * 60 * 60 * 24));

    let bengaliYear = baseBengaliYear;
    let bengaliMonth = baseBengaliMonth;
    let bengaliDay = baseBengaliDay + diffInDays;

    const bengaliMonthLengths = [31, 31, 31, 32, 31, 30, 30, 30, 29, 30, 30, 30]; // Lengths of Bengali months

    while (bengaliDay > bengaliMonthLengths[bengaliMonth - 1]) {
        bengaliDay -= bengaliMonthLengths[bengaliMonth - 1];
        bengaliMonth += 1;
        if (bengaliMonth > 12) {
            bengaliMonth = 1;
            bengaliYear += 1;
        }
    }

    while (bengaliDay <= 0) {
        bengaliMonth -= 1;
        if (bengaliMonth < 1) {
            bengaliMonth = 12;
            bengaliYear -= 1;
        }
        bengaliDay += bengaliMonthLengths[bengaliMonth - 1];
    }

    const convertToBengaliDigits = (number) => {
        return number.toString().split('').map(digit => bengaliDigits[parseInt(digit)]).join('');
    };

    const bengaliDayStr = convertToBengaliDigits(bengaliDay);
    const bengaliYearStr = convertToBengaliDigits(bengaliYear);

    return `${bengaliDayStr}-${bengaliMonths[bengaliMonth - 1]}-${bengaliYearStr}`;
}
// Function to filter a JSON array based on a search term and specific fields
// This function filters a JSON array based on a search term and specific fields.
// It returns a new array containing only the objects that match the search term in any of the specified fields.
// The function takes three parameters: jsonArray (the array to filter), searchTerm (the term to search for), and fields (the fields to check for the search term).
// The function returns the filtered array.
function filterJsonArray(jsonArray, searchTerm, fields) {
    if (!searchTerm.trim()) return jsonArray; // No filtering if input is empty
  
    const term = searchTerm.toLowerCase();
   console.log(term);
    return jsonArray.filter(item =>
      fields.some(field =>
        item[field]?.toString().toLowerCase().includes(term)
      )
    );
  }