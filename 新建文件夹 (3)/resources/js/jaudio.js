// # ----- Script info:
// - Author: Michael Mammoliti
// - Name: jAudio.js
// - Version: 0.2
// - js dipendencies: jQuery
// - Release date: 25 November 2015
// - GitHub: https://github.com/MichaelMammoliti/jAudio.js

// # ----- Contact info
// - GitHub: https://github.com/MichaelMammoliti
// - Mail: mammoliti.michael@gmail.com
// - Twitter: @MichMammoliti

// # ----- License Info
// - Released under the GPL v3 license.

(function ($) {

  var pluginName = "jAudio",
    defaults = {
      playlist: [
        {
          file: "resources/tracks/周杰伦 - 白色风车.mp3",
          thumb: "resources/thumbs/白色风车.png",
          trackName: "白色风车",
          trackArtist: "周杰伦",
          trackAlbum: "",
        },
        {
          file: "resources/tracks/周杰伦 - 半岛铁盒.mp3",
          thumb: "resources/thumbs/半岛铁盒.png",
          trackName: "半岛铁盒",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 不能说的秘密.mp3",
          thumb: "resources/thumbs/不能说的秘密.png",
          trackName: "不能说的秘密",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 等你下课(with 杨瑞代).mp3",
          thumb: "resources/thumbs/等你下课.png",
          trackName: "等你下课(with 杨瑞代)",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 发如雪.mp3",
          thumb: "resources/thumbs/发如雪.png",
          trackName: "发如雪",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 告白气球.mp3",
          thumb: "resources/thumbs/告白气球.png",
          trackName: "告白气球",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 搁浅.mp3",
          thumb: "resources/thumbs/搁浅.png",
          trackName: "搁浅",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 给我一首歌的时间.mp3",
          thumb: "resources/thumbs/给我一首歌的时间.png",
          trackName: "给我一首歌的时间",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 简单爱.mp3",
          thumb: "resources/thumbs/简单爱.png",
          trackName: "简单爱",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 蒲公英的约定.mp3",
          thumb: "resources/thumbs/蒲公英的约定.png",
          trackName: "蒲公英的约定",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 七里香.mp3",
          thumb: "resources/thumbs/七里香.png",
          trackName: "七里香",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 青花瓷.mp3",
          thumb: "resources/thumbs/青花瓷.png",
          trackName: "青花瓷",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 听妈妈的话.mp3",
          thumb: "resources/thumbs/听妈妈的话.png",
          trackName: "听妈妈的话",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 烟花易冷.mp3",
          thumb: "resources/thumbs/烟花易冷.png",
          trackName: "烟花易冷",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 夜曲.mp3",
          thumb: "resources/thumbs/夜曲.png",
          trackName: "夜曲",
          trackArtist: "周杰伦",
          trackAlbum: "",
        }, {
          file: "resources/tracks/周杰伦 - 一路向北.mp3",
          thumb: "resources/thumbs/一路向北.png",
          trackName: "一路向北",
          trackArtist: "周杰伦",
          trackAlbum: "",
        },
        {
          file: "resources/tracks/阿YueYue、戾格、小田音乐社 - 沈园外.mp3",
          thumb: "https://img0.baidu.com/it/u=4265129778,1675751740&fm=11&fmt=auto&gp=0.jpg",
          trackName: "沈园外",
          trackArtist: "阿YueYue、戾格、小田音乐社",
          trackAlbum: "",
        },
        {
          file: "resources/tracks/青蛙 - 小跳蛙.mp3",
          thumb: "https://img0.baidu.com/it/u=79888864,1729380074&fm=26&fmt=auto&gp=0.jpg",
          trackName: "小跳蛙",
          trackArtist: "青蛙",
          trackAlbum: "",
        },
        {
          file: "resources/tracks/小时姑娘、龚骏 - 爱殇.mp3",
          thumb: "https://img1.baidu.com/it/u=1444423283,226385426&fm=26&fmt=auto&gp=0.jpg",
          trackName: "爱殇",
          trackArtist: "小时姑娘、龚骏",
          trackAlbum: "",
        },
        {
          file: "resources/tracks/周杰倫 .Lara-珊瑚海.mp3",
          thumb: "",
          trackName: "珊瑚海",
          trackArtist: "周杰倫",
          trackAlbum: "",
        },{
          file: "resources/tracks/周杰伦 - 夜的第七章.mp3",
          thumb: "",
          trackName: "夜的第七章",
          trackArtist: "周杰伦",
          trackAlbum: "",
        },{
          file: "resources/tracks/周杰伦 - 彩虹.mp3",
          thumb: "",
          trackName: "彩虹",
          trackArtist: "周杰伦",
          trackAlbum: "",
        },
      ],

      defaultAlbum: undefined,
      defaultArtist: undefined,
      defaultTrack: 0,

      autoPlay: false,

      debug: false
    };

  function Plugin($context, options) {
    this.settings = $.extend(true, defaults, options);

    this.$context = $context;

    this.domAudio = this.$context.find("audio")[0];
    this.$domPlaylist = this.$context.find(".jAudio--playlist");
    this.$domControls = this.$context.find(".jAudio--controls");
    this.$domVolumeBar = this.$context.find(".jAudio--volume");
    this.$domDetails = this.$context.find(".jAudio--details");
    this.$domStatusBar = this.$context.find(".jAudio--status-bar");
    this.$domProgressBar = this.$context.find(".jAudio--progress-bar-wrapper");
    this.$domTime = this.$context.find(".jAudio--time");
    this.$domElapsedTime = this.$context.find(".jAudio--time-elapsed");
    this.$domTotalTime = this.$context.find(".jAudio--time-total");
    this.$domThumb = this.$context.find(".jAudio--thumb");

    this.currentState = "pause";
    this.currentTrack = this.settings.defaultTrack;
    this.currentElapsedTime = undefined;

    this.timer = undefined;

    this.init();
  }

  Plugin.prototype = {

    init: function () {
      var self = this;

      self.renderPlaylist();
      self.preLoadTrack();
      self.highlightTrack();
      self.updateTotalTime();
      self.events();
      self.debug();
      self.domAudio.volume = 0.05
    },

    play: function () {
      var self = this,
        playButton = self.$domControls.find("#btn-play");

      self.domAudio.play();

      if (self.currentState === "play") return;

      clearInterval(self.timer);
      self.timer = setInterval(self.run.bind(self), 50);

      self.currentState = "play";

      // change id
      playButton.data("action", "pause");
      playButton.attr("id", "btn-pause");

      // activate
      playButton.toggleClass('active');
    },

    pause: function () {
      var self = this,
        playButton = self.$domControls.find("#btn-pause");

      self.domAudio.pause();
      clearInterval(self.timer);

      self.currentState = "pause";

      // change id
      playButton.data("action", "play");
      playButton.attr("id", "btn-play");

      // activate
      playButton.toggleClass('active');

    },

    stop: function () {
      var self = this;

      self.domAudio.pause();
      self.domAudio.currentTime = 0;

      self.animateProgressBarPosition();
      clearInterval(self.timer);
      self.updateElapsedTime();

      self.currentState = "stop";
    },

    prev: function () {
      var self = this,
        track;

      (self.currentTrack === 0)
        ? track = self.settings.playlist.length - 1
        : track = self.currentTrack - 1;

      self.changeTrack(track);
    },
    next: function () {
      var self = this,
        track;

      (self.currentTrack === self.settings.playlist.length - 1)
        ? track = 0
        : track = self.currentTrack + 1;

      self.changeTrack(track);
    },


    preLoadTrack: function () {
      var self = this,
        defTrack = self.settings.defaultTrack;

      self.changeTrack(defTrack);

      self.stop();
    },

    changeTrack: function (index) {
      var self = this;

      self.currentTrack = index;
      self.domAudio.src = self.settings.playlist[index].file;

      if (self.currentState === "play" || self.settings.autoPlay) self.play();

      self.highlightTrack();

      self.updateThumb();

      self.renderDetails();
    },

    events: function () {
      var self = this;

      // - controls events
      self.$domControls.on("click", "button", function () {
        var action = $(this).data("action");

        switch (action) {
          case "prev": self.prev.call(self); break;
          case "next": self.next.call(self); break;
          case "pause": self.pause.call(self); break;
          case "stop": self.stop.call(self); break;
          case "play": self.play.call(self); break;
        };

      });

      // - playlist events
      self.$domPlaylist.on("click", ".jAudio--playlist-item", function (e) {
        var item = $(this),
          track = item.data("track"),
          index = item.index();

        if (self.currentTrack === index) return;

        self.changeTrack(index);
      });

      // - volume's bar events
      // to do

      // - progress bar events
      self.$domProgressBar.on("click", function (e) {
        self.updateProgressBar(e);
        self.updateElapsedTime();
      });

      $(self.domAudio).on("loadedmetadata", function () {
        self.animateProgressBarPosition.call(self);
        self.updateElapsedTime.call(self);
        self.updateTotalTime.call(self);
      });
    },


    getAudioSeconds: function (string) {
      var self = this,
        string = string % 60;
      string = self.addZero(Math.floor(string), 2);

      (string < 60) ? string = string : string = "00";

      return string;
    },

    getAudioMinutes: function (string) {
      var self = this,
        string = string / 60;
      string = self.addZero(Math.floor(string), 2);

      (string < 60) ? string = string : string = "00";

      return string;
    },

    addZero: function (word, howManyZero) {
      var word = String(word);

      while (word.length < howManyZero) word = "0" + word;

      return word;
    },

    removeZero: function (word, howManyZero) {
      var word = String(word),
        i = 0;

      while (i < howManyZero) {
        if (word[0] === "0") { word = word.substr(1, word.length); } else { break; }

        i++;
      }

      return word;
    },


    highlightTrack: function () {
      var self = this,
        tracks = self.$domPlaylist.children(),
        className = "active";

      tracks.removeClass(className);
      tracks.eq(self.currentTrack).addClass(className);
    },

    renderDetails: function () {
      var self = this,
        track = self.settings.playlist[self.currentTrack],
        file = track.file,
        thumb = track.thumb,
        trackName = track.trackName,
        trackArtist = track.trackArtist,
        trackAlbum = track.trackAlbum,
        template = "";

      template += "<p>";
      template += "<span>" + trackName + "</span>";
      // template += " - ";
      template += "<span>" + trackArtist + "</span>";
      // template += "<span>" + trackAlbum + "</span>";
      template += "</p>";


      $(".jAudio--details").html(template);

    },

    renderPlaylist: function () {
      var self = this,
        template = "";


      $.each(self.settings.playlist, function (i, a) {
        var file = a["file"],
          thumb = a["thumb"],
          trackName = a["trackName"],
          trackArtist = a["trackArtist"],
          trackAlbum = a["trackAlbum"];
        trackDuration = "00:00";

        template += "<div class='jAudio--playlist-item' data-track='" + file + "'>";

        template += "<div class='jAudio--playlist-thumb'><img src='" + thumb + "'></div>";

        template += "<div class='jAudio--playlist-meta-text'>";
        template += "<h4>" + trackName + "</h4>";
        template += "<p>" + trackArtist + "</p>";
        template += "</div>";
        // template += "<div class='jAudio--playlist-track-duration'>" + trackDuration + "</div>";
        template += "</div>";

        // });

      });

      self.$domPlaylist.html(template);

    },

    run: function () {
      var self = this;

      self.animateProgressBarPosition();
      self.updateElapsedTime();

      if (self.domAudio.ended) self.next();
    },

    animateProgressBarPosition: function () {
      var self = this,
        percentage = (self.domAudio.currentTime * 100 / self.domAudio.duration) + "%",
        styles = { "width": percentage };

      self.$domProgressBar.children().eq(0).css(styles);
    },

    updateProgressBar: function (e) {
      var self = this,
        mouseX,
        percentage,
        newTime;

      if (e.offsetX) mouseX = e.offsetX;
      if (mouseX === undefined && e.layerX) mouseX = e.layerX;

      percentage = mouseX / self.$domProgressBar.width();
      newTime = self.domAudio.duration * percentage;

      self.domAudio.currentTime = newTime;
      self.animateProgressBarPosition();
    },

    updateElapsedTime: function () {
      var self = this,
        time = self.domAudio.currentTime,
        minutes = self.getAudioMinutes(time),
        seconds = self.getAudioSeconds(time),

        audioTime = minutes + ":" + seconds;

      self.$domElapsedTime.text(audioTime);
    },

    updateTotalTime: function () {
      var self = this,
        time = self.domAudio.duration,
        minutes = self.getAudioMinutes(time),
        seconds = self.getAudioSeconds(time),
        audioTime = minutes + ":" + seconds;

      self.$domTotalTime.text(audioTime);
    },


    updateThumb: function () {
      var self = this,
        thumb = self.settings.playlist[self.currentTrack].thumb,
        styles = {
          "background-image": "url(" + thumb + ")"
        };

      self.$domThumb.css(styles);
    },

    debug: function () {
      var self = this;

      if (self.settings.debug) console.log(self.settings);
    }

  }

  $.fn[pluginName] = function (options) {
    var instantiate = function () {
      return new Plugin($(this), options);
    }

    $(this).each(instantiate);
  }

})(jQuery)

var t = {
  playlist: []
}

$(".jAudio--player").jAudio(t);