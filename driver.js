const driver = window.driver.js.driver;

const driverObj = driver({
    overlayColor: '#abb3c2',
    animate: true,
    popoverClass: 'driverjs-theme',
    showProgress: true,
    allowClose: false,
    steps: [
        {
            element: '.card',
            popover: {
                title: 'Book',
                description: 'Click on book to Open it again click to close it before click on Done button. Otherwise for next instruction move to next to click on the next button',
                side: "top",
                align: 'center'
            }
        },
        // {
        //     element: '',
        //     popover: {
        //         title: '',
        //         description: ''
        //     }
        // },
    ],
    onDestroyStarted: () => {
        if (!driverObj.hasNextStep() || confirm("Are you sure?")) {
            driverObj.destroy();
        }
    },
});


driverObj.drive();