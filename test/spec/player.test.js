describe('Player', function() {
  var url = browser.baseUrl + 'player-test.html';

  beforeEach(function() {
    browser.driver.get(url);
  });

  it('Page title contains "video.js"', function() {
    expect(browser.driver.getTitle()).toEqual('video.js');
  });

  it('Test that clicking the play button works.', function() {
    browser.driver.findElement(By.className('vjs-big-play-button')).click();
    browser.driver.sleep(1000).then(function() {
      expect(browser.driver.isElementPresent(By.className('vjs-playing'))).toBe(true);
    });
  });

  xit('Test that the media progresses as expected.', function() {});

  xit('Test pause and resume works.', function() {});

  xit('Test seeking (forwards and backwards) works.', function() {});

  xit('Test that switching videos in a playlist works.', function() {});

  xit('Test that emailing the video link and other social interactions pause the video and then let the user resume from paused point.', function() {});

  xit('Test that going into and exiting full screen works', function() {});

  xit('Test pre-roll ads work', function() {});

  xit('Test click-thrus work and you go to the advertiser’s landing page.', function() {});

  xit('Test you can come back after clicking through and resume your ad/video from where you left off.', function() {});

  xit('Test control bar is available and actionable during ads.', function() {});

  xit('Test you can pause ads.', function() {});

  xit('Test you can resume after pausing ads.', function() {});

  xit('Test transition to video content is seamless (no audio/video issues, no skips, no long delays, no spinners over video content)', function() {});

  xit('Verify you can enter and exit full screen while the ad is playing', function() {});

  xit('Verify you cannot scrub through an ad (except when the native player takes over)', function() {});

  xit('Verify that if the ad errors out, it does not affect the playing of the video. The timeout should not be so long as to affect the viewing experience.', function() {});

  xit('If the video is unavailable for any reason, the ad should play.', function() {});

  xit('Test you can enable and disable captions', function() {});

  xit('Test you can update caption settings.', function() {});

  xit('Test caption settings persist across multiple browser loads.', function() {});

  xit('Test you can load and view players via Accessibility options.', function() {});

});
