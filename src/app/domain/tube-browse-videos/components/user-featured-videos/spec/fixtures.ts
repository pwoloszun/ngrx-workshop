import { VideoDto } from '@infrastructure/api/video-api.service';

export function videosJson(): VideoDto[] {
  return [
    {
      "id": 100,
      "authorId": 7,
      "title": "Fantastic Concrete Shirt",
      "description": "New range of formal shirts are designed keeping you in mind. With fits and styling that will make you stand apart",
      "duration": 786916,
      "posterUrl": "https://loremflickr.com/320/180/sports?lock=52898",
      "videoUrl": "http://neat-smock.biz",
      "createdAt": 1336073677681
    },
    {
      "id": 101,
      "authorId": 1,
      "title": "Awesome Soft Towels",
      "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
      "duration": 309589,
      "posterUrl": "https://loremflickr.com/320/180/animals?lock=38462",
      "videoUrl": "http://dependable-aquifer.info",
      "createdAt": 1611674309931
    },
    {
      "id": 102,
      "authorId": 10,
      "title": "Tasty Cotton Hat",
      "description": "Ergonomic executive chair upholstered in bonded black leather and PVC padded seat and back for all-day comfort and support",
      "duration": 799550,
      "posterUrl": "https://loremflickr.com/320/180/animals?lock=32466",
      "videoUrl": "http://glistening-resemblance.net",
      "createdAt": 1580322861179
    },
    {
      "id": 103,
      "authorId": 14,
      "title": "Small Steel Table",
      "description": "The Apollotech B340 is an affordable wireless mouse with reliable connectivity, 12 months battery life and modern design",
      "duration": 197815,
      "posterUrl": "https://loremflickr.com/320/180/technics?lock=45770",
      "videoUrl": "https://gargantuan-lifestyle.name",
      "createdAt": 1414779004690
    },
  ];
}
