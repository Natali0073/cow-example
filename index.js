
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get('/*', function (req, res, next) {
    if (!req.path.includes('api'))
        res.sendFile(path.join(__dirname, 'build', 'index.html'));
    else next();
});

app.get('/api/posts', (req, res) => {
    res.send(postsList);
});

let listenPort = process.env.PORT || 5000;

app.get('/api/posts/:id', (req, res) => {
    const matching = postsList.filter(t => t.id === +req.params.id)[0];
if (matching) {
    res.send(matching);
} else {
    res.status(404).send({error: `Cannot find contact ${+req.params.id}`});
}
});

app.get('/api/contacts', (req, res) => {
    res.send(contactsList);
});

app.get('/api/contacts/:id', (req, res) => {
    const matching = contactsList.filter(t => t.id === +req.params.id)[0];
if (matching) {
    res.send(matching);
} else {
    res.status(404).send({error: `Cannot find contact ${+req.params.id}`});
}
});

app.post('/api/contacts', (req, res) => {
    const contact = req.body;
const lastItem = contactsList[contactsList.length - 1].id + 1;
const newContact = {
    id: lastItem,
    birthDate: contact.birthDate,
    email: contact.email,
    firstName: contact.firstName,
    lastName: contact.lastName,
    office: contact.office,
    personalEmail: contact.personalEmail,
    phoneOne: contact.phoneOne,
    phoneTwo: contact.phoneTwo,
    position: contact.position,
    skype: contact.skype,
};

contactsList.push(newContact);
res.send(contactsList);
});

app.get('/api/person-info', (req, res) => {
    res.send(JSON.stringify(homeData));
});

app.post('/api/person-technologies', (req, res) => {
    const contact = req.body;
const lastItem = technologiesListMock[technologiesListMock.length - 1].id + 1;
const newTechnology = {
    id: lastItem,
    name: contact.name,
};

technologiesListMock.push(newTechnology);
res.send(technologiesListMock);
});

app.get('/api/person-technologies', (req, res) => {
    res.send(technologiesListMock);
});

app.listen(listenPort, () => console.log('Example app listening on port ' + listenPort));




const postsList = [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
        userId: 1,
        id: 2,
        title: "qui est esse",
        body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
        userId: 1,
        id: 3,
        title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
        body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
        userId: 1,
        id: 4,
        title: "eum et est occaecati",
        body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
        userId: 1,
        id: 5,
        title: "nesciunt quas odio",
        body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
        userId: 1,
        id: 6,
        title: "dolorem eum magni eos aperiam quia",
        body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
        userId: 1,
        id: 7,
        title: "magnam facilis autem",
        body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
        userId: 1,
        id: 8,
        title: "dolorem dolore est ipsam",
        body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
        userId: 1,
        id: 9,
        title: "nesciunt iure omnis dolorem tempora et accusantium",
        body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
        userId: 1,
        id: 10,
        title: "optio molestias id quia eum",
        body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
        userId: 2,
        id: 11,
        title: "et ea vero quia laudantium autem",
        body: "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
        userId: 2,
        id: 12,
        title: "in quibusdam tempore odit est dolorem",
        body: "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },
    {
        userId: 2,
        id: 13,
        title: "dolorum ut in voluptas mollitia et saepe quo animi",
        body: "aut dicta possimus sint mollitia voluptas commodi quo doloremque\niste corrupti reiciendis voluptatem eius rerum\nsit cumque quod eligendi laborum minima\nperferendis recusandae assumenda consectetur porro architecto ipsum ipsam"
    },
    {
        userId: 2,
        id: 14,
        title: "voluptatem eligendi optio",
        body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
    },
    {
        userId: 2,
        id: 15,
        title: "eveniet quod temporibus",
        body: "reprehenderit quos placeat\nvelit minima officia dolores impedit repudiandae molestiae nam\nvoluptas recusandae quis delectus\nofficiis harum fugiat vitae"
    },
    {
        userId: 2,
        id: 16,
        title: "sint suscipit perspiciatis velit dolorum rerum ipsa laboriosam odio",
        body: "suscipit nam nisi quo aperiam aut\nasperiores eos fugit maiores voluptatibus quia\nvoluptatem quis ullam qui in alias quia est\nconsequatur magni mollitia accusamus ea nisi voluptate dicta"
    },
    {
        userId: 2,
        id: 17,
        title: "fugit voluptas sed molestias voluptatem provident",
        body: "eos voluptas et aut odit natus earum\naspernatur fuga molestiae ullam\ndeserunt ratione qui eos\nqui nihil ratione nemo velit ut aut id quo"
    },
    {
        userId: 2,
        id: 18,
        title: "voluptate et itaque vero tempora molestiae",
        body: "eveniet quo quis\nlaborum totam consequatur non dolor\nut et est repudiandae\nest voluptatem vel debitis et magnam"
    },
    {
        userId: 2,
        id: 19,
        title: "adipisci placeat illum aut reiciendis qui",
        body: "illum quis cupiditate provident sit magnam\nea sed aut omnis\nveniam maiores ullam consequatur atque\nadipisci quo iste expedita sit quos voluptas"
    },
    {
        userId: 2,
        id: 20,
        title: "doloribus ad provident suscipit at",
        body: "qui consequuntur ducimus possimus quisquam amet similique\nsuscipit porro ipsam amet\neos veritatis officiis exercitationem vel fugit aut necessitatibus totam\nomnis rerum consequatur expedita quidem cumque explicabo"
    },
    {
        userId: 3,
        id: 21,
        title: "asperiores ea ipsam voluptatibus modi minima quia sint",
        body: "repellat aliquid praesentium dolorem quo\nsed totam minus non itaque\nnihil labore molestiae sunt dolor eveniet hic recusandae veniam\ntempora et tenetur expedita sunt"
    },
    {
        userId: 3,
        id: 22,
        title: "dolor sint quo a velit explicabo quia nam",
        body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
        userId: 3,
        id: 23,
        title: "maxime id vitae nihil numquam",
        body: "veritatis unde neque eligendi\nquae quod architecto quo neque vitae\nest illo sit tempora doloremque fugit quod\net et vel beatae sequi ullam sed tenetur perspiciatis"
    },
    {
        userId: 3,
        id: 24,
        title: "autem hic labore sunt dolores incidunt",
        body: "enim et ex nulla\nomnis voluptas quia qui\nvoluptatem consequatur numquam aliquam sunt\ntotam recusandae id dignissimos aut sed asperiores deserunt"
    },
    {
        userId: 3,
        id: 25,
        title: "rem alias distinctio quo quis",
        body: "ullam consequatur ut\nomnis quis sit vel consequuntur\nipsa eligendi ipsum molestiae et omnis error nostrum\nmolestiae illo tempore quia et distinctio"
    },
    {
        userId: 3,
        id: 26,
        title: "est et quae odit qui non",
        body: "similique esse doloribus nihil accusamus\nomnis dolorem fuga consequuntur reprehenderit fugit recusandae temporibus\nperspiciatis cum ut laudantium\nomnis aut molestiae vel vero"
    },
    {
        userId: 3,
        id: 27,
        title: "quasi id et eos tenetur aut quo autem",
        body: "eum sed dolores ipsam sint possimus debitis occaecati\ndebitis qui qui et\nut placeat enim earum aut odit facilis\nconsequatur suscipit necessitatibus rerum sed inventore temporibus consequatur"
    },
    {
        userId: 3,
        id: 28,
        title: "delectus ullam et corporis nulla voluptas sequi",
        body: "non et quaerat ex quae ad maiores\nmaiores recusandae totam aut blanditiis mollitia quas illo\nut voluptatibus voluptatem\nsimilique nostrum eum"
    },
    {
        userId: 3,
        id: 29,
        title: "iusto eius quod necessitatibus culpa ea",
        body: "odit magnam ut saepe sed non qui\ntempora atque nihil\naccusamus illum doloribus illo dolor\neligendi repudiandae odit magni similique sed cum maiores"
    },
    {
        userId: 3,
        id: 30,
        title: "a quo magni similique perferendis",
        body: "alias dolor cumque\nimpedit blanditiis non eveniet odio maxime\nblanditiis amet eius quis tempora quia autem rem\na provident perspiciatis quia"
    },
    {
        userId: 4,
        id: 31,
        title: "ullam ut quidem id aut vel consequuntur",
        body: "debitis eius sed quibusdam non quis consectetur vitae\nimpedit ut qui consequatur sed aut in\nquidem sit nostrum et maiores adipisci atque\nquaerat voluptatem adipisci repudiandae"
    },
    {
        userId: 4,
        id: 32,
        title: "doloremque illum aliquid sunt",
        body: "deserunt eos nobis asperiores et hic\nest debitis repellat molestiae optio\nnihil ratione ut eos beatae quibusdam distinctio maiores\nearum voluptates et aut adipisci ea maiores voluptas maxime"
    },
    {
        userId: 4,
        id: 33,
        title: "qui explicabo molestiae dolorem",
        body: "rerum ut et numquam laborum odit est sit\nid qui sint in\nquasi tenetur tempore aperiam et quaerat qui in\nrerum officiis sequi cumque quod"
    },
    {
        userId: 4,
        id: 34,
        title: "magnam ut rerum iure",
        body: "ea velit perferendis earum ut voluptatem voluptate itaque iusto\ntotam pariatur in\nnemo voluptatem voluptatem autem magni tempora minima in\nest distinctio qui assumenda accusamus dignissimos officia nesciunt nobis"
    },
    {
        userId: 4,
        id: 35,
        title: "id nihil consequatur molestias animi provident",
        body: "nisi error delectus possimus ut eligendi vitae\nplaceat eos harum cupiditate facilis reprehenderit voluptatem beatae\nmodi ducimus quo illum voluptas eligendi\net nobis quia fugit"
    },
    {
        userId: 4,
        id: 36,
        title: "fuga nam accusamus voluptas reiciendis itaque",
        body: "ad mollitia et omnis minus architecto odit\nvoluptas doloremque maxime aut non ipsa qui alias veniam\nblanditiis culpa aut quia nihil cumque facere et occaecati\nqui aspernatur quia eaque ut aperiam inventore"
    },
    {
        userId: 4,
        id: 37,
        title: "provident vel ut sit ratione est",
        body: "debitis et eaque non officia sed nesciunt pariatur vel\nvoluptatem iste vero et ea\nnumquam aut expedita ipsum nulla in\nvoluptates omnis consequatur aut enim officiis in quam qui"
    },
    {
        userId: 4,
        id: 38,
        title: "explicabo et eos deleniti nostrum ab id repellendus",
        body: "animi esse sit aut sit nesciunt assumenda eum voluptas\nquia voluptatibus provident quia necessitatibus ea\nrerum repudiandae quia voluptatem delectus fugit aut id quia\nratione optio eos iusto veniam iure"
    },
    {
        userId: 4,
        id: 39,
        title: "eos dolorem iste accusantium est eaque quam",
        body: "corporis rerum ducimus vel eum accusantium\nmaxime aspernatur a porro possimus iste omnis\nest in deleniti asperiores fuga aut\nvoluptas sapiente vel dolore minus voluptatem incidunt ex"
    },
    {
        userId: 4,
        id: 40,
        title: "enim quo cumque",
        body: "ut voluptatum aliquid illo tenetur nemo sequi quo facilis\nipsum rem optio mollitia quas\nvoluptatem eum voluptas qui\nunde omnis voluptatem iure quasi maxime voluptas nam"
    },
    {
        userId: 5,
        id: 41,
        title: "non est facere",
        body: "molestias id nostrum\nexcepturi molestiae dolore omnis repellendus quaerat saepe\nconsectetur iste quaerat tenetur asperiores accusamus ex ut\nnam quidem est ducimus sunt debitis saepe"
    },
    {
        userId: 5,
        id: 42,
        title: "commodi ullam sint et excepturi error explicabo praesentium voluptas",
        body: "odio fugit voluptatum ducimus earum autem est incidunt voluptatem\nodit reiciendis aliquam sunt sequi nulla dolorem\nnon facere repellendus voluptates quia\nratione harum vitae ut"
    },
    {
        userId: 5,
        id: 43,
        title: "eligendi iste nostrum consequuntur adipisci praesentium sit beatae perferendis",
        body: "similique fugit est\nillum et dolorum harum et voluptate eaque quidem\nexercitationem quos nam commodi possimus cum odio nihil nulla\ndolorum exercitationem magnam ex et a et distinctio debitis"
    },
    {
        userId: 5,
        id: 44,
        title: "optio dolor molestias sit",
        body: "temporibus est consectetur dolore\net libero debitis vel velit laboriosam quia\nipsum quibusdam qui itaque fuga rem aut\nea et iure quam sed maxime ut distinctio quae"
    },
    {
        userId: 5,
        id: 45,
        title: "ut numquam possimus omnis eius suscipit laudantium iure",
        body: "est natus reiciendis nihil possimus aut provident\nex et dolor\nrepellat pariatur est\nnobis rerum repellendus dolorem autem"
    },
    {
        userId: 5,
        id: 46,
        title: "aut quo modi neque nostrum ducimus",
        body: "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
    },
    {
        userId: 5,
        id: 47,
        title: "quibusdam cumque rem aut deserunt",
        body: "voluptatem assumenda ut qui ut cupiditate aut impedit veniam\noccaecati nemo illum voluptatem laudantium\nmolestiae beatae rerum ea iure soluta nostrum\neligendi et voluptate"
    },
    {
        userId: 5,
        id: 48,
        title: "ut voluptatem illum ea doloribus itaque eos",
        body: "voluptates quo voluptatem facilis iure occaecati\nvel assumenda rerum officia et\nillum perspiciatis ab deleniti\nlaudantium repellat ad ut et autem reprehenderit"
    },
    {
        userId: 5,
        id: 49,
        title: "laborum non sunt aut ut assumenda perspiciatis voluptas",
        body: "inventore ab sint\nnatus fugit id nulla sequi architecto nihil quaerat\neos tenetur in in eum veritatis non\nquibusdam officiis aspernatur cumque aut commodi aut"
    },
    {
        userId: 5,
        id: 50,
        title: "repellendus qui recusandae incidunt voluptates tenetur qui omnis exercitationem",
        body: "error suscipit maxime adipisci consequuntur recusandae\nvoluptas eligendi et est et voluptates\nquia distinctio ab amet quaerat molestiae et vitae\nadipisci impedit sequi nesciunt quis consectetur"
    },
    {
        userId: 6,
        id: 51,
        title: "soluta aliquam aperiam consequatur illo quis voluptas",
        body: "sunt dolores aut doloribus\ndolore doloribus voluptates tempora et\ndoloremque et quo\ncum asperiores sit consectetur dolorem"
    },
    {
        userId: 6,
        id: 52,
        title: "qui enim et consequuntur quia animi quis voluptate quibusdam",
        body: "iusto est quibusdam fuga quas quaerat molestias\na enim ut sit accusamus enim\ntemporibus iusto accusantium provident architecto\nsoluta esse reprehenderit qui laborum"
    },
    {
        userId: 6,
        id: 53,
        title: "ut quo aut ducimus alias",
        body: "minima harum praesentium eum rerum illo dolore\nquasi exercitationem rerum nam\nporro quis neque quo\nconsequatur minus dolor quidem veritatis sunt non explicabo similique"
    },
    {
        userId: 6,
        id: 54,
        title: "sit asperiores ipsam eveniet odio non quia",
        body: "totam corporis dignissimos\nvitae dolorem ut occaecati accusamus\nex velit deserunt\net exercitationem vero incidunt corrupti mollitia"
    },
    {
        userId: 6,
        id: 55,
        title: "sit vel voluptatem et non libero",
        body: "debitis excepturi ea perferendis harum libero optio\neos accusamus cum fuga ut sapiente repudiandae\net ut incidunt omnis molestiae\nnihil ut eum odit"
    },
    {
        userId: 6,
        id: 56,
        title: "qui et at rerum necessitatibus",
        body: "aut est omnis dolores\nneque rerum quod ea rerum velit pariatur beatae excepturi\net provident voluptas corrupti\ncorporis harum reprehenderit dolores eligendi"
    },
    {
        userId: 6,
        id: 57,
        title: "sed ab est est",
        body: "at pariatur consequuntur earum quidem\nquo est laudantium soluta voluptatem\nqui ullam et est\net cum voluptas voluptatum repellat est"
    },
    {
        userId: 6,
        id: 58,
        title: "voluptatum itaque dolores nisi et quasi",
        body: "veniam voluptatum quae adipisci id\net id quia eos ad et dolorem\naliquam quo nisi sunt eos impedit error\nad similique veniam"
    },
    {
        userId: 6,
        id: 59,
        title: "qui commodi dolor at maiores et quis id accusantium",
        body: "perspiciatis et quam ea autem temporibus non voluptatibus qui\nbeatae a earum officia nesciunt dolores suscipit voluptas et\nanimi doloribus cum rerum quas et magni\net hic ut ut commodi expedita sunt"
    },
    {
        userId: 6,
        id: 60,
        title: "consequatur placeat omnis quisquam quia reprehenderit fugit veritatis facere",
        body: "asperiores sunt ab assumenda cumque modi velit\nqui esse omnis\nvoluptate et fuga perferendis voluptas\nillo ratione amet aut et omnis"
    },
    {
        userId: 7,
        id: 61,
        title: "voluptatem doloribus consectetur est ut ducimus",
        body: "ab nemo optio odio\ndelectus tenetur corporis similique nobis repellendus rerum omnis facilis\nvero blanditiis debitis in nesciunt doloribus dicta dolores\nmagnam minus velit"
    },
    {
        userId: 7,
        id: 62,
        title: "beatae enim quia vel",
        body: "enim aspernatur illo distinctio quae praesentium\nbeatae alias amet delectus qui voluptate distinctio\nodit sint accusantium autem omnis\nquo molestiae omnis ea eveniet optio"
    },
    {
        userId: 7,
        id: 63,
        title: "voluptas blanditiis repellendus animi ducimus error sapiente et suscipit",
        body: "enim adipisci aspernatur nemo\nnumquam omnis facere dolorem dolor ex quis temporibus incidunt\nab delectus culpa quo reprehenderit blanditiis asperiores\naccusantium ut quam in voluptatibus voluptas ipsam dicta"
    },
    {
        userId: 7,
        id: 64,
        title: "et fugit quas eum in in aperiam quod",
        body: "id velit blanditiis\neum ea voluptatem\nmolestiae sint occaecati est eos perspiciatis\nincidunt a error provident eaque aut aut qui"
    },
    {
        userId: 7,
        id: 65,
        title: "consequatur id enim sunt et et",
        body: "voluptatibus ex esse\nsint explicabo est aliquid cumque adipisci fuga repellat labore\nmolestiae corrupti ex saepe at asperiores et perferendis\nnatus id esse incidunt pariatur"
    },
    {
        userId: 7,
        id: 66,
        title: "repudiandae ea animi iusto",
        body: "officia veritatis tenetur vero qui itaque\nsint non ratione\nsed et ut asperiores iusto eos molestiae nostrum\nveritatis quibusdam et nemo iusto saepe"
    },
    {
        userId: 7,
        id: 67,
        title: "aliquid eos sed fuga est maxime repellendus",
        body: "reprehenderit id nostrum\nvoluptas doloremque pariatur sint et accusantium quia quod aspernatur\net fugiat amet\nnon sapiente et consequatur necessitatibus molestiae"
    },
    {
        userId: 7,
        id: 68,
        title: "odio quis facere architecto reiciendis optio",
        body: "magnam molestiae perferendis quisquam\nqui cum reiciendis\nquaerat animi amet hic inventore\nea quia deleniti quidem saepe porro velit"
    },
    {
        userId: 7,
        id: 69,
        title: "fugiat quod pariatur odit minima",
        body: "officiis error culpa consequatur modi asperiores et\ndolorum assumenda voluptas et vel qui aut vel rerum\nvoluptatum quisquam perspiciatis quia rerum consequatur totam quas\nsequi commodi repudiandae asperiores et saepe a"
    },
    {
        userId: 7,
        id: 70,
        title: "voluptatem laborum magni",
        body: "sunt repellendus quae\nest asperiores aut deleniti esse accusamus repellendus quia aut\nquia dolorem unde\neum tempora esse dolore"
    },
    {
        userId: 8,
        id: 71,
        title: "et iusto veniam et illum aut fuga",
        body: "occaecati a doloribus\niste saepe consectetur placeat eum voluptate dolorem et\nqui quo quia voluptas\nrerum ut id enim velit est perferendis"
    },
    {
        userId: 8,
        id: 72,
        title: "sint hic doloribus consequatur eos non id",
        body: "quam occaecati qui deleniti consectetur\nconsequatur aut facere quas exercitationem aliquam hic voluptas\nneque id sunt ut aut accusamus\nsunt consectetur expedita inventore velit"
    },
    {
        userId: 8,
        id: 73,
        title: "consequuntur deleniti eos quia temporibus ab aliquid at",
        body: "voluptatem cumque tenetur consequatur expedita ipsum nemo quia explicabo\naut eum minima consequatur\ntempore cumque quae est et\net in consequuntur voluptatem voluptates aut"
    },
    {
        userId: 8,
        id: 74,
        title: "enim unde ratione doloribus quas enim ut sit sapiente",
        body: "odit qui et et necessitatibus sint veniam\nmollitia amet doloremque molestiae commodi similique magnam et quam\nblanditiis est itaque\nquo et tenetur ratione occaecati molestiae tempora"
    },
    {
        userId: 8,
        id: 75,
        title: "dignissimos eum dolor ut enim et delectus in",
        body: "commodi non non omnis et voluptas sit\nautem aut nobis magnam et sapiente voluptatem\net laborum repellat qui delectus facilis temporibus\nrerum amet et nemo voluptate expedita adipisci error dolorem"
    },
    {
        userId: 8,
        id: 76,
        title: "doloremque officiis ad et non perferendis",
        body: "ut animi facere\ntotam iusto tempore\nmolestiae eum aut et dolorem aperiam\nquaerat recusandae totam odio"
    },
    {
        userId: 8,
        id: 77,
        title: "necessitatibus quasi exercitationem odio",
        body: "modi ut in nulla repudiandae dolorum nostrum eos\naut consequatur omnis\nut incidunt est omnis iste et quam\nvoluptates sapiente aliquam asperiores nobis amet corrupti repudiandae provident"
    },
    {
        userId: 8,
        id: 78,
        title: "quam voluptatibus rerum veritatis",
        body: "nobis facilis odit tempore cupiditate quia\nassumenda doloribus rerum qui ea\nillum et qui totam\naut veniam repellendus"
    },
    {
        userId: 8,
        id: 79,
        title: "pariatur consequatur quia magnam autem omnis non amet",
        body: "libero accusantium et et facere incidunt sit dolorem\nnon excepturi qui quia sed laudantium\nquisquam molestiae ducimus est\nofficiis esse molestiae iste et quos"
    },
    {
        userId: 8,
        id: 80,
        title: "labore in ex et explicabo corporis aut quas",
        body: "ex quod dolorem ea eum iure qui provident amet\nquia qui facere excepturi et repudiandae\nasperiores molestias provident\nminus incidunt vero fugit rerum sint sunt excepturi provident"
    },
    {
        userId: 9,
        id: 81,
        title: "tempora rem veritatis voluptas quo dolores vero",
        body: "facere qui nesciunt est voluptatum voluptatem nisi\nsequi eligendi necessitatibus ea at rerum itaque\nharum non ratione velit laboriosam quis consequuntur\nex officiis minima doloremque voluptas ut aut"
    },
    {
        userId: 9,
        id: 82,
        title: "laudantium voluptate suscipit sunt enim enim",
        body: "ut libero sit aut totam inventore sunt\nporro sint qui sunt molestiae\nconsequatur cupiditate qui iste ducimus adipisci\ndolor enim assumenda soluta laboriosam amet iste delectus hic"
    },
    {
        userId: 9,
        id: 83,
        title: "odit et voluptates doloribus alias odio et",
        body: "est molestiae facilis quis tempora numquam nihil qui\nvoluptate sapiente consequatur est qui\nnecessitatibus autem aut ipsa aperiam modi dolore numquam\nreprehenderit eius rem quibusdam"
    },
    {
        userId: 9,
        id: 84,
        title: "optio ipsam molestias necessitatibus occaecati facilis veritatis dolores aut",
        body: "sint molestiae magni a et quos\neaque et quasi\nut rerum debitis similique veniam\nrecusandae dignissimos dolor incidunt consequatur odio"
    },
    {
        userId: 9,
        id: 85,
        title: "dolore veritatis porro provident adipisci blanditiis et sunt",
        body: "similique sed nisi voluptas iusto omnis\nmollitia et quo\nassumenda suscipit officia magnam sint sed tempora\nenim provident pariatur praesentium atque animi amet ratione"
    },
    {
        userId: 9,
        id: 86,
        title: "placeat quia et porro iste",
        body: "quasi excepturi consequatur iste autem temporibus sed molestiae beatae\net quaerat et esse ut\nvoluptatem occaecati et vel explicabo autem\nasperiores pariatur deserunt optio"
    },
    {
        userId: 9,
        id: 87,
        title: "nostrum quis quasi placeat",
        body: "eos et molestiae\nnesciunt ut a\ndolores perspiciatis repellendus repellat aliquid\nmagnam sint rem ipsum est"
    },
    {
        userId: 9,
        id: 88,
        title: "sapiente omnis fugit eos",
        body: "consequatur omnis est praesentium\nducimus non iste\nneque hic deserunt\nvoluptatibus veniam cum et rerum sed"
    },
    {
        userId: 9,
        id: 89,
        title: "sint soluta et vel magnam aut ut sed qui",
        body: "repellat aut aperiam totam temporibus autem et\narchitecto magnam ut\nconsequatur qui cupiditate rerum quia soluta dignissimos nihil iure\ntempore quas est"
    },
    {
        userId: 9,
        id: 90,
        title: "ad iusto omnis odit dolor voluptatibus",
        body: "minus omnis soluta quia\nqui sed adipisci voluptates illum ipsam voluptatem\neligendi officia ut in\neos soluta similique molestias praesentium blanditiis"
    },
    {
        userId: 10,
        id: 91,
        title: "aut amet sed",
        body: "libero voluptate eveniet aperiam sed\nsunt placeat suscipit molestias\nsimilique fugit nam natus\nexpedita consequatur consequatur dolores quia eos et placeat"
    },
    {
        userId: 10,
        id: 92,
        title: "ratione ex tenetur perferendis",
        body: "aut et excepturi dicta laudantium sint rerum nihil\nlaudantium et at\na neque minima officia et similique libero et\ncommodi voluptate qui"
    },
    {
        userId: 10,
        id: 93,
        title: "beatae soluta recusandae",
        body: "dolorem quibusdam ducimus consequuntur dicta aut quo laboriosam\nvoluptatem quis enim recusandae ut sed sunt\nnostrum est odit totam\nsit error sed sunt eveniet provident qui nulla"
    },
    {
        userId: 10,
        id: 94,
        title: "qui qui voluptates illo iste minima",
        body: "aspernatur expedita soluta quo ab ut similique\nexpedita dolores amet\nsed temporibus distinctio magnam saepe deleniti\nomnis facilis nam ipsum natus sint similique omnis"
    },
    {
        userId: 10,
        id: 95,
        title: "id minus libero illum nam ad officiis",
        body: "earum voluptatem facere provident blanditiis velit laboriosam\npariatur accusamus odio saepe\ncumque dolor qui a dicta ab doloribus consequatur omnis\ncorporis cupiditate eaque assumenda ad nesciunt"
    },
    {
        userId: 10,
        id: 96,
        title: "quaerat velit veniam amet cupiditate aut numquam ut sequi",
        body: "in non odio excepturi sint eum\nlabore voluptates vitae quia qui et\ninventore itaque rerum\nveniam non exercitationem delectus aut"
    },
    {
        userId: 10,
        id: 97,
        title: "quas fugiat ut perspiciatis vero provident",
        body: "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
    },
    {
        userId: 10,
        id: 98,
        title: "laboriosam dolor voluptates",
        body: "doloremque ex facilis sit sint culpa\nsoluta assumenda eligendi non ut eius\nsequi ducimus vel quasi\nveritatis est dolores"
    },
    {
        userId: 10,
        id: 99,
        title: "temporibus sit alias delectus eligendi possimus magni",
        body: "quo deleniti praesentium dicta non quod\naut est molestias\nmolestias et officia quis nihil\nitaque dolorem quia"
    },
    {
        userId: 10,
        id: 100,
        title: "at nam consequatur ea labore ea harum",
        body: "cupiditate quo est a modi nesciunt soluta\nipsa voluptas error itaque dicta in\nautem qui minus magnam et distinctio eum\naccusamus ratione error aut"
    }
];

const contactsList = [
    {
        birthDate: '1995-10-17',
        email: 'andrii.didovych@sombrainc.com',
        firstName: 'Andrii',
        id: 200,
        lastName: 'Didovych',
        office: 'LV',
        personalEmail: 'andrii.didovych@gmail.com',
        phoneOne: '098 709 24 60',
        phoneTwo: null,
        position: 'Trainee Java developer',
        skype: 'live:andrii.didovych',
    },
    {
        birthDate: '1996-09-16',
        email: 'andrii.ostryzhniuk@sombrainc.com',
        firstName: 'Andrii',
        id: 132,
        lastName: 'Ostryzhniuk',
        office: 'IF',
        personalEmail: 'andrii.ostryzhniuk@gmail.com',
        phoneOne: '099 376 85 21',
        phoneTwo: '096 730 32 98',
        position: 'Strong Junior Java developer',
        skype: 'ostryzhnykandriy',
    },
    {
        birthDate: '1989-07-05',
        email: 'anna.fedorus@sombrainc.com',
        firstName: 'Anna',
        id: 35,
        lastName: 'Fedorus',
        office: 'LV',
        personalEmail: 'annfedorus@gmail.com',
        phoneOne: '063 454 80 34',
        phoneTwo: null,
        position: 'HR Coordinator',
        skype: 'fedorusanna',
    },
    {
        birthDate: '1994-09-25',
        email: 'anna.lotovska@sombrainc.com',
        firstName: 'Anna',
        id: 171,
        lastName: 'Lotovska',
        office: 'LV',
        personalEmail: 'ann.lotovska@gmail.com',
        phoneOne: '099 094 24 99',
        phoneTwo: null,
        position: 'Sales assistant',
        skype: 'annalotovska',
    },
    {
        birthDate: '1986-10-22',
        email: 'artem.korchevyi@sombrainc.com',
        firstName: 'Artem',
        id: 184,
        lastName: 'Korchevyi',
        office: 'IF',
        personalEmail: 'artem.korchevy@gmail.com',
        phoneOne: '066 584 63 41',
        phoneTwo: null,
        position: 'Middle QA Automation',
        skype: 'live:antracot',
    },
    {
        birthDate: '1991-07-01',
        email: 'bohdamyr@sombrainc.com',
        firstName: 'Bohdamyr',
        id: 28,
        lastName: 'Stefaniuk',
        office: 'IF',
        personalEmail: 'levovi4@gmail.com',
        phoneOne: '0633094432',
        phoneTwo: '',
        position: 'Middle Java developer',
        skype: 'theevilsscream',
    },
    {
        birthDate: '1994-06-01',
        email: 'bohdan.levkovych@sombrainc.com',
        firstName: 'Bohdan',
        id: 96,
        lastName: 'Levkovych',
        office: 'LV',
        personalEmail: 'fnx@ukr.net',
        phoneOne: '0636514491',
        phoneTwo: null,
        position: 'Middle Java developer',
        skype: 'vasul.petroivanstepan',
    },
    {
        birthDate: '1996-05-27',
        email: 'bohdan.savshak@sombrainc.com',
        firstName: 'Bohdan',
        id: 141,
        lastName: 'Savshak',
        office: 'LV',
        personalEmail: 'savshakbohdan@gmail.com',
        phoneOne: '0987243261',
        phoneTwo: null,
        position: 'Strong Junior Java developer',
        skype: 'live:savshak',
    },
    {
        birthDate: '1995-03-31',
        email: 'bohdan.smachylo@sombrainc.com',
        firstName: 'Bohdan',
        id: 13,
        lastName: 'Smachylo',
        office: 'LV',
        personalEmail: 'bsmachylo86@gmail.com',
        phoneOne: '097 642 66 50',
        phoneTwo: '0635582273',
        position: 'Middle Java developer',
        skype: 'bogdan9812',
    },
    {
        birthDate: '1986-07-26',
        email: 'bogdan.vesylivskyy@sombrainc.com',
        firstName: 'Bohdan',
        id: 196,
        lastName: 'Vesylivskyy',
        office: 'LV',
        personalEmail: 'vesylivskyy@gmail.com',
        phoneOne: '380 685 01 26',
        phoneTwo: null,
        position: 'Word Press developer',
        skype: 'bvesyliv',
    },
    {
        birthDate: '1994-08-04',
        email: 'igor.bardyuk@sombrainc.com',
        firstName: 'Ihor',
        id: 91,
        lastName: 'Bardiuk',
        office: 'IF',
        personalEmail: 'igor.igruk@gmail.com',
        phoneOne: '0500267637',
        phoneTwo: null,
        position: 'Strong Junior Java developer',
        skype: 'igruk.igor1',
    },
    {
        birthDate: '1996-04-19',
        email: 'ihor.bilobran@sombrainc.com',
        firstName: 'Ihor',
        id: 168,
        lastName: 'Bilobran',
        office: 'LV',
        personalEmail: 'ihor.bilobran@gmail.com',
        phoneOne: '067 800 40 41',
        phoneTwo: null,
        position: 'Junior Front-end developer',
        skype: 'ihor.bilobran96',
    },
    {
        birthDate: '1995-11-24',
        email: 'ihor.cherepakha@sombrainc.com',
        firstName: 'Ihor',
        id: 195,
        lastName: 'Cherepakha',
        office: 'IF',
        personalEmail: 'cherepakha@yahoo.com',
        phoneOne: '0960169647',
        phoneTwo: null,
        position: 'Trainee Front-end developer',
        skype: 'live:cherepakha_3',
    },
    {
        birthDate: '1996-05-26',
        email: 'iryna.bohaichuk@sombrainc.com',
        firstName: 'Iryna',
        id: 112,
        lastName: 'Bohaichuk',
        office: 'LV',
        personalEmail: 'ibogaychuk96@gmail.com',
        phoneOne: '093 534 76 89',
        phoneTwo: '068 009 62 41',
        position: 'Junior Recruiter',
        skype: 'live:613950dd8e3bff33',
    },
    {
        birthDate: '1990-10-19',
        email: 'iryna.dovhanyk@sombrainc.com',
        firstName: 'Iryna',
        id: 54,
        lastName: 'Dovhanyk',
        office: 'LV',
        personalEmail: 'iravesna@gmail.com',
        phoneOne: '097 765 74 67',
        phoneTwo: '063 177 92 26',
        position: 'Head of Finance and Legal',
        skype: 'iravesna19',
    },
    {
        birthDate: '1990-01-16',
        email: 'iryna.kyryleiza@sombrainc.com',
        firstName: 'Iryna',
        id: 151,
        lastName: 'Kyryleyza',
        office: 'LV',
        personalEmail: 'iryna3339@gmail.com',
        phoneOne: '0975245441',
        phoneTwo: null,
        position: 'Accountant Assistant',
        skype: 'live:iryna3339',
    },
    {
        birthDate: '1996-09-12',
        email: 'ivan.arabchuk@sombrainc.com',
        firstName: 'Ivan',
        id: 98,
        lastName: 'Arabchuk',
        office: 'IF',
        personalEmail: 'iVankoarabchuk@gmail.com',
        phoneOne: '066 041 89 82',
        phoneTwo: null,
        position: 'Strong Junior Java developer',
        skype: 'live:ivanarabchuk',
    },
    {
        birthDate: '1993-03-17',
        email: 'ivan.koss@sombrainc.com',
        firstName: 'Ivan',
        id: 65,
        lastName: 'Kos',
        office: 'IF',
        personalEmail: 'ivan.koss.b@gmail.com',
        phoneOne: '0687092435',
        phoneTwo: '0669957948',
        position: 'Middle Front-end developer',
        skype: 'kos_vanja',
    },
    {
        birthDate: '1996-06-17',
        email: 'juliia.mykytyn@sombrainc.com',
        firstName: 'Juliia',
        id: 191,
        lastName: 'Mykytyn',
        office: 'LV',
        personalEmail: 'juliamykytyn17@gmail.com',
        phoneOne: '068  85 4  50 84',
        phoneTwo: null,
        position: 'Accountant Assistant',
        skype: 'live:9516858696715d3f',
    },
    {
        birthDate: '1987-07-02',
        email: 'kateryna.dzigua@sombrainc.com',
        firstName: 'Kateryna',
        id: 161,
        lastName: 'Dzigua',
        office: 'LV',
        personalEmail: 'katrin.dzigua@gmail.com',
        phoneOne: '093 673 81 98',
        phoneTwo: null,
        position: 'UX/UI Designer',
        skype: 'katrin.dzigua',
    }
];

const homeData = {
    id: 90,
    department: 'Delivery',
    email: 'natalia.makarchuk@sombrainc.com',
    fullName: 'Nataliia Makarchuk',
    hrManager: {
        id: 108,
        firstname: 'Nataliia',
        lastname: 'Shulzhenko',
        corporateEmail: 'natalia.shulzhenko@sombrainc.com',
    },
    manager: {
        id: 83,
        firstname: 'Orysia',
        lastname: 'Marukhno',
        corporateEmail: 'orysia.marukhno@sombrainc.com',
    },
    mentor: null,
    office: 'LVIV',
    position: 'Middle Front-end developer',
    roles: [
        {
            id: 9,
            roleType: 'ROLE_USER'
        }
    ],
    sombraMoney: null,
    vacationDaysLeft: 1,
};

const technologiesListMock = [
    {
        id: 1,
        name: 'Angular'
    },
    {
        id: 2,
        name: 'AngularJs'
    }
];




