describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  test('Title in top', async () => {
    await expect(element(by.text('TITLE'))).toBeVisible();
  
   
   
  });



  test('Tap on list items', async () => {
   
    await  element(by.id('tap_me')).tap();
   
   
  });


  // it('should show hello screen after tap', async () => {
  //   await element(by.id('hello_button')).tap();
  //   await expect(element(by.text('Hello!!!'))).toBeVisible();
  // });

  // it('should show world screen after tap', async () => {
  //   await element(by.id('world_button')).tap();
  //   await expect(element(by.text('World!!!'))).toBeVisible();
  // });
});
