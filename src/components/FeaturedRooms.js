import React, { Component } from "react";
import { RoomContext } from "../context";
import Room from "./Room";
import Title from "../components/Title";
import Loading from "../components/Loading";

export default class FeaturedRooms extends Component {
  static contextType = RoomContext;
  render() {
    // const value = this.context;
    // console.log(value);
    // return <div>hello from featured rooms</div>;
    // const { featuredRooms: rooms } = this.context;
    // console.log(rooms);
    let { loading, featuredRooms: rooms } = this.context;
    rooms = rooms.map(room => {
      return <Room key={Room.id} room={room} />;
    });
    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : rooms}
        </div>
      </section>
    );
  }
}
