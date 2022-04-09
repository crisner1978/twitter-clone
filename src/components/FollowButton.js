import { useAuthUser } from "context/auth-context";
import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { followUser, unfollowUser } from "utils/api-client";

export default function FollowButton({ user }) {
  const authUser = useAuthUser()
  const [hoverText, SetHoverText] = useState('')
  const [hoverVariant, SetHoverVariant] = useState('')

  function handleMouseEnter() {
    user.following && SetHoverText("Unfollow")
    user.following && SetHoverVariant("danger")
  }

  function handleMouseLeave() {
    SetHoverText("")
    SetHoverVariant("")
  }

  async function handleUnfollowUser(event) {
    event.preventDefault()
    await unfollowUser(user.screen_name)
    SetHoverText("Unfollowed")
  }

  function handleFollowUser(event) {
    event.preventDefault()
    followUser(user.screen_name)
  }

  const text = user?.following ? "Following" : "Follow"
  const variant = user?.following ? "primary" : "outline-primary"

  const hideFollowButton = !user || authUser?.screen_name === user?.screen_name;

  if (hideFollowButton) return null

  return (
    <Button
      onClick={user?.following ? handleUnfollowUser : handleFollowUser}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      variant={hoverVariant || variant}
      className="rounded-pill px-3 py-1 font-weight-bold">
      <span>{hoverText || text}</span>
    </Button>
  );
}
