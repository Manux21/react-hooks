import React, {useContext, useEffect} from 'react'
import {Link, useParams} from "react-router-dom";
import {GithubContext} from "../context/github/githubContext";

export const Profile = () => {

  const {getUser, getRepos, loading, user, repos} = useContext(GithubContext)
  const urlName = useParams();

  useEffect(() => {
   getUser(urlName.name)
   getRepos(urlName.name)
  }, [])

 if (loading) {
   return <p className='text-center'>Загрузка...</p>
 }

  const {
   name, company, avatar_url,
    location, bio, blog,
    login, html_url, followers,
    following,
    public_repos, public_gists
  } = user

  return (
    <>
      <Link to='/' className='btn btn-link'>На главную</Link>
      <div className="card mb-4">
        <div className="card-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{width:'150px'}}
              />
              <h1>Name</h1>
              {location && <p>Местоположение: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h4>BIO</h4>
                  <p>{bio}</p>
                </>
              }

              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}

                {company && <li>
                <strong>Компания: </strong> {company}
              </li>}

                {blog && <li>
                <strong>Website: </strong> {blog}
              </li>}
              </ul>
              <div style={{color: 'dark'}}><strong>Подписчики:</strong> {followers}</div>
              <div style={{color: 'dark'}}><strong>Подписан:</strong> {following}</div>
              <div style={{color: 'dark'}}><strong>Репозитории:</strong> {public_repos}</div>
              <div style={{color: 'dark'}}><strong>Gists:</strong> {public_gists}</div>

              <a
                href={html_url}
                target='_blank'
                className='btn btn-dark'
              >Открыть профиль</a>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}