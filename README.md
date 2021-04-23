let response = receiveFirst().then((r)=>{
    // success of first
    receivedSecond().then((r1)=>{
        // second call success
    })
})

// USe Seperate Promise Calls
p1
p2
p3
// Use Promise.all(), 10 overloads
// Promise.all(T1)
// Promise.all(T1,,,,,,,,T10)
    - Promise divide the execution into Micro Tasks