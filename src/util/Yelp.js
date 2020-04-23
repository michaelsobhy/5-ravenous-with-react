/* Client ID
eOr9-bvt8iQExfmwMgayYA
 */
// API Key
const apiKey = "ii3m19tMkFZFpATxj7RA9k6vWy5Rt5b81rQ-rATCU5OmyNcK8Mn7bVUtbFaqZaXOo42R3pA2IkyW5pU0wroLA14P-A2pt5mnFWAzX1_ueWStjZxzbrX0So0aGRSiXnYx"

const Yelp = {
    search (term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        { 
            headers: 
            {
                Authorization: `Bearer ${apiKey}`
            } 
        })
        .then(response => response.json())
        .then(jsonResponse => {
            if (jsonResponse.businesses) {
                console.log(jsonResponse.businesses);
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories["0"].title,
                        rating: business.rating,
                        reviewCount: business.review_count                
                    }
                })
            }
        });
    }
};

export default Yelp;