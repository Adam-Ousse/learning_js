Realtime database change and easy to use.

### Real time Database
1. New Project
2. Create realtime database
3. Initialize app/database : 
```js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"  
import { getDatabase ,ref,push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"  
const appSettings={  
    databaseURL:"https://databaseurl/:null"  
}
const app = initializeApp(appSettings);  
const database = getDatabase(app);  
const promptsInDb = ref(database,"database_name");
push(promptsInDb,{  
    prompt:inputEl.value,  
    response:response  
});
```

Security rules 

```json
{
  "rules": {
    ".read": "now < 1719788400000",  // 2024-7-1
    ".write": "now < 1719788400000",  // 2024-7-1
  }
}
```

### Fetching data whenever it's changed 
```js
import { getDatabase ,ref,push,onValue} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js" 

onValue(promptsInDb,function(snpashot){
if(snapshot.exists()){//a snapshot does exist
	console.log(snapshot.val());
}
	
})
```

### Delete an item 

each item has an unique id
We delete an item using it's id

```js
import { getDatabase ,ref,push,remove} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js" 
let first_item_ud  = "LQKSQSNLA123412"
let exactLocationOfStoryInDB = ref(database, `database_name/${first_item_ud}`)
remove(exactLocationOfStoryInDB)
```