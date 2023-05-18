import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import app_config from "../../config";
import MusicCard from "../../props/MusicCard";
import { Bars } from "react-loader-spinner";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "red",
        marginRight: "2rem",
        color: "black",
      }}
      onClick={onClick}
    />
  );
}

const ArtistHome = ({ selMusic, setSelMusic }) => {
  const url = app_config.api_url;

  const [musicArray, setMusicArray] = useState([]);
  const [artistArray, setArtistArray] = useState([]);
  const [musicByPlayCount, setMusicByPlayCount] = useState([]);
  const [musicByDate, setMusicByDate] = useState([]);
  const [classicalSongs, setClassicalSongs] = useState([]);
  const [folkSongs, setFolkSongs] = useState([]);
  const [westernSongs, setWesternSongs] = useState([]);
  const [bluesSongs, setBluesSongs] = useState([]);
  const [jazzSongs, setJazzSongs] = useState([]);
  const [rockSongs, setRockSongs] = useState([]);
  const [hipHopSongs, setHipHopSongs] = useState([]);
  const [electronicSongs, setElectronicSongs] = useState([]);
  const [popSongs, setPopSongs] = useState([]);
  const [isloading, setIsloading] = useState(true);
  const [isloading2, setIsloading2] = useState(true);

  const getMusic = async () => {
    const response = await fetch(url + "/music/getall");
    const data = await response.json();
    console.log("songs", data);
    setMusicArray(data);
    setIsloading(false);
  };

  const getArtist = async () => {
    const response = await fetch(url + "/artist/getall");
    const data = await response.json();
    console.log("artists", data);
    const reversedData = data.reverse(); // Reverse the data array

    setArtistArray(reversedData);
    setIsloading2(false);
  };

  const getMusicByPlayCount = async () => {
    const response = await fetch(url + "/music/getallbyplaycount");
    const data = await response.json();
    setMusicByPlayCount(data);
    console.log("by Play count", data);
  };

  const getMusicByCreateOrder = async () => {
    const response = await fetch(url + "/music/getbycreatedorder");
    const data = await response.json();
    setMusicByDate(data);
    console.log("by created order", data);
  };

  const getClassical = async () => {
    const response = await fetch(url + "/music/getbygenre/Classical");
    const data = await response.json();
    setClassicalSongs(data);
    console.log("Classical", data);
  };

  const getFolk = async () => {
    const response = await fetch(url + "/music/getbygenre/Folk");
    const data = await response.json();
    setFolkSongs(data);
    console.log("Folk", data);
  };

  const getWestern = async () => {
    const response = await fetch(url + "/music/getbygenre/Western");
    const data = await response.json();
    setWesternSongs(data);
    console.log("Western", data);
  };

  const getBlues = async () => {
    const response = await fetch(url + "/music/getbygenre/Blues");
    const data = await response.json();
    setBluesSongs(data);
    console.log("Blues", data);
  };

  const getJazz = async () => {
    const response = await fetch(url + "/music/getbygenre/Jazz");
    const data = await response.json();
    setJazzSongs(data);
    console.log("Jazz", data);
  };

  const getRock = async () => {
    const response = await fetch(url + "/music/getbygenre/Rock");
    const data = await response.json();
    setRockSongs(data);
    console.log("Rock", data);
  };

  const getHipHop = async () => {
    const response = await fetch(url + "/music/getbygenre/HipHop");
    const data = await response.json();
    setHipHopSongs(data);
    console.log("HipHop", data);
  };

  const getElectronic = async () => {
    const response = await fetch(url + "/music/getbygenre/Electronic");
    const data = await response.json();
    setElectronicSongs(data);
    console.log("Electronic", data);
  };

  const getPop = async () => {
    const response = await fetch(url + "/music/getbygenre/Pop");
    const data = await response.json();
    setPopSongs(data);
    console.log("Pop", data);
  };

  useEffect(() => {
    getMusic();
    getArtist();
    getMusicByPlayCount();
    getMusicByCreateOrder();
    getClassical();
    getFolk();
    getWestern();
    getBlues();
    getJazz();
    getRock();
    getHipHop();
    getElectronic();
    getPop();
  }, []);

  const displayAllMusic = () => {
    return musicArray.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayByPlayCount = () => {
    return musicByPlayCount.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayByDateOrder = () => {
    return musicByDate.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayClassical = () => {
    return classicalSongs.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayFolk = () => {
    return folkSongs.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayWestern = () => {
    return westernSongs.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayBlues = () => {
    return bluesSongs.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayJazz = () => {
    return jazzSongs.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayRock = () => {
    return rockSongs.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayHipHop = () => {
    return hipHopSongs.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayElectronic = () => {
    return electronicSongs.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const displayPop = () => {
    return popSongs.map((music, index) => (
      <div key={index} className="d-flex justify-content-center">
        <MusicCard music={music} setSelMusic={setSelMusic} />
      </div>
    ));
  };

  const settings = {
    className: "center",
    infinite: false,
    centerPadding: "60px",
    slidesToShow: 6,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    autoplay: true,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  var settings3 = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mt-5">
      <div>
        {isloading ? (
          <>
            <Bars
              height="80"
              width="80"
              color="#4fa94d"
              ariaLabel="bars-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </>
        ) : (
          <Slider {...settings2}>
            <div className="d-flex flex-column">
              {/* <h3>1</h3> */}
              <center>
                <img
                  style={{
                    width: "380px",
                    height: "250px",
                    backgroundSize: "cover",
                  }}
                  src="https://a10.gaanacdn.com/gn_img/showcase/0wrb4N3Lg7/wrb4jpM3Lg/size_l_1640488725.webp"
                  alt="artist-img"
                />
              </center>
            </div>
            <div className="d-flex flex-column">
              {/* <h3>1</h3> */}
              <center>
                <img
                  style={{
                    width: "380px",
                    height: "250px",
                    backgroundSize: "cover",
                  }}
                  src="https://s1.dmcdn.net/v/H2Gni1NlaziC8Dhx6/x1080"
                  alt="artist-img"
                />
              </center>
            </div>
            <div className="d-flex flex-column">
              {/* <h3>1</h3> */}
              <center>
                <img
                  style={{
                    width: "380px",
                    height: "250px",
                    backgroundSize: "cover",
                  }}
                  src="https://a10.gaanacdn.com/gn_img/albums/7rVW1aRWk5/VW1aEGejWk/size_l.webp"
                  alt="artist-img"
                />
              </center>
            </div>
            <div className="d-flex flex-column">
              {/* <h3>1</h3> */}
              <center>
                <img
                  style={{
                    width: "380px",
                    height: "250px",
                    backgroundSize: "cover",
                  }}
                  src="https://a10.gaanacdn.com/gn_img/albums/D0PKLrWGl9/PKLqE2XR3G/size_l.jpg"
                  alt="artist-img"
                />
              </center>
            </div>
            <div className="d-flex  justify-content-between">
              {/* <h3>1</h3> */}
              <center>
                <img
                  style={{
                    width: "380px",
                    height: "250px",
                    backgroundSize: "cover",
                    // borderRadius: "50%",
                  }}
                  src="https://a10.gaanacdn.com/gn_img/albums/a7LWBaz3zX/LWBkQx9Dbz/size_l.jpg"
                  alt="artist-img"
                />
              </center>
            </div>
          </Slider>
        )}
      </div>
      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Popular Songs
        </span>
        <Slider {...settings}>{displayAllMusic()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          New Releases
        </span>
        <Slider {...settings}>{displayByDateOrder()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Trending Songs
        </span>
        <Slider {...settings}>{displayByPlayCount()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Classical Series
        </span>
        <Slider {...settings}>{displayClassical()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Folk Series
        </span>
        <Slider {...settings}>{displayFolk()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Western Series
        </span>
        <Slider {...settings}>{displayWestern()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Blues Series
        </span>
        <Slider {...settings}>{displayBlues()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Jazz Series
        </span>
        <Slider {...settings}>{displayJazz()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Rock Series
        </span>
        <Slider {...settings}>{displayRock()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Hip-Hop Series
        </span>
        <Slider {...settings}>{displayHipHop()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Electronic Series
        </span>
        <Slider {...settings}>{displayElectronic()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Pop Series
        </span>
        <Slider {...settings}>{displayPop()}</Slider>
      </div>

      <div className="mt-5">
        <span
          style={{
            marginLeft: "0.7rem",
            color: "black",
            fontSize: "1.2rem",
            fontWeight: "bolder",
          }}
        >
          Featured Artists
        </span>
        <Slider {...settings3}>
          {artistArray.map((artist, index) => {
            return (
              <div key={index} className="d-flex flex-column">
                <center>
                  <img
                    style={{
                      width: "150px",
                      height: "150px",
                      backgroundSize: "cover",
                      borderRadius: "50%",
                      border: "7px solid black",
                    }}
                    src={url + "/" + artist.avatar}
                    alt="artist-img"
                  />
                </center>
                <p
                  className="d-flex justify-content-center mt-2"
                  style={{ fontSize: "large", color: "black" }}
                >
                  {artist?.name}
                </p>
              </div>
            );
          })}
        </Slider>
      </div>

      <audio src={""}></audio>
    </div>
  );
};

export default ArtistHome;
