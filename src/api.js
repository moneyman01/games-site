const base_url = "https://api.rawg.io/api/";
const apiKey = "e61157096d9c4e1a994159ce3c0cc62c";

const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1
    if (month < 10) {
        return `0${month}`
    } else {
        return month;
    }
};

const getCurrentday = () => {
    const day = new Date().getDate()
    if (day < 10) {
        return `0${day}`
    } else {
        return day;
    }
};
 
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentday();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear -1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear +1}-${currentMonth}-${currentDay}`;

const popular_games = `games?key=${apiKey}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;









