## Installation & usage
```
npm i
```

```
npm run build
```

```
cd build && node app.js
```

## Testing
```
npm run test
```

## A few words about implementation
As you will see in the code, I decided to first filter the input data by sport discipline and then perform mapping on 
the grouped objects to the desired structure. In my opinion, this is a more readable solution, I'm not a big fan of long 
chains of if statements. On the other hand, I'm aware that this adds an extra iteration over the data, but for such a 
small array, it doesn't make a difference. In the case of dealing with a really large amount of data, I would consider a
different approach, such as a single "map" function on the input data with specific function calls based on the sport
discipline.
