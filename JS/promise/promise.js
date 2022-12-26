// Promise
// const doPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     const skills = ["HTML", "CSS", "JS", "React"];
//     if (skills.length > 0) {
//     resolve(skills);
//     } else {
//     reject("Something wrong has happened");
//     }
//     }, 2000);
//     });
//     doPromise.then(result => {
//         console.log(result)
//         })
//         .catch(error => console.log(error))
//     console.log(doPromise);
    console.log('promise');

    // const doPromise = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //     const skills = ['HTML', 'CSS', 'JS']
    //     if (skills.indexOf('Node') !== -1) {
    //     resolve('fullstack developer')
    //     } else {
    //     reject('Something wrong has happened')
    //     }
    //     }, 2000)
    //     })
    //     doPromise
    //     .then(result => {
    //     console.log(result)
    //     })
    //     .catch(error => console.log(error));

    //     let newObjImage = {
    //         type: "png",
    //         size: "1800x2090",
    //         file: { fileName: "img.png", path: "./desktop/img2.png"
    //         }};
    //     function getImage(image) {
    //         let imagePromise = new Promise((resolve, reject) => {
    //         if (image.type != "png") {
    //         reject("PNG файл биш байна");
    //         } else {
    //         resolve(image);
    //         }
    //         });
    //         return imagePromise;
    //         }
    //         getImage(newObjImage)
    //         .then((image) => console.log(image))
    //         .catch((err) => console.log(err));

    async function fryEgg() {
        return 1;
        }
        fryEgg().then((res)=>console.log(res))
    // async function fryEgg() {
        // let promise = new Promise((resolve, reject) => {
        // setTimeout(() => resolve("done!"), 1000)
        // });
        // let result = await promise; // энд 1 сэкүнд хүлээнэ
        // console.log(result);
        // }
        // console.log("a");
        // console.log("b");
        // fryEgg();
        // console.log("final");

        const tasks = [
            { value: 1 },
            { value: 2 },
            { value: 3 },
            { value: 4 },
            { value: 5 },
            { value: 6 },
          ];
          
          // const arr = [...tasks];
          // const [, task] = tasks;
          // const { value } = task;
          // console.log(value);
          
          // Array forEach method
          // arr.forEach((value) => {
          //   console.log(`arr:`, value);
          // });
          
          // Array map method
          // const newArr = tasks.map(({value}) => value * 2);
          // console.log(arr);
          // console.log(newArr);
          
          // Array filter method
          // const filteredArr = arr.filter((value) => value % 2 === 0);
          // console.log(filteredArr);
          
          // Array findIndex method
          // const index = arr.findIndex((value) => value === 2);
          // console.log(index);
          
          // Array reduce method
          
          // const sum = arr.reduce(function (total, value) {
          //   return total * value;
          // });
          // console.log(sum);
          const a = 31;
          
          console.log(
            a >= 21
              ? a <= 30
                ? "bag uugaarai"
                : "Husseneeree uu"
              : "nas chine hurehgui bna"
          );
          const numberBtns = document.querySelectorAll(".number");
          
          console.log(numberBtns);
          
          numberBtns.forEach((btn) => {
            btn.addEventListener("click", (e) => {
              console.log("Clicked", e.target.textContent);
            });
          });
          console.log("Promise");
          
          const getData = (userId) => {
            return new Promise((resolve, reject) => {
              console.log("Ajillaj ehellee");
              setTimeout(
                (id) => {
                  if (id === 1) {
                    resolve("Saraa");
                  } else if (id === 2) {
                    resolve("boldoo");
                  } else {
                    reject("Hereglegchiin medeelel oldsongui");
                  }
                },
                5000,
                userId
              );
          
              // reject(new Error("Failed"));
            });
          };
          
          getData(3)
            .then((userData) => {
              console.log(userData);
            })
            .catch((err) => {
              console.log("Error message", err);
            });
          
          // console.log(getData(1));
          
          console.log("End");