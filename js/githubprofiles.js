
const gitStatsResult = document.querySelector("#profile_stats");

export function statsRow(repo,gist,followers, following, joined, updated, location, profile_name,url){
    while (gitStatsResult.firstChild){
        gitStatsResult.removeChild(gitStatsResult.firstChild);
    }
    const divlev1 = document.createElement("div");
    divlev1.classList = "container d-flex justify-content-center align-items-center vh-100";
    
    const divlev2 = document.createElement("div");
    divlev2.classList = "card shadow-lg border-0";
    Object.assign(divlev2.style,{
        width: '22rem',
        border: '15px'
    });

    const divlev3 = document.createElement("div");
    divlev3.classList = "card-body text-center p-1";
    
    // Create the main div
    const divpic = document.createElement("div");
    divpic.className = "bg-primary rounded-circle mx-auto mb-3";
    divpic.style.width = "100px";
    divpic.style.height = "100px";

    // Create the inner span
    const span = document.createElement("span");
    span.className = "text-white d-flex align-items-center justify-content-center h-100";

    // Create the icon element
    const icon = document.createElement("i");
    icon.className = "bi bi-person fs-1";

    // Append icon to span, and span to div
    span.appendChild(icon);
    divpic.appendChild(span);

    // Create the h5 element for the name
    const profilename = document.createElement("h5");
    profilename.classList = "card-title fw-bold mb-1";
    profilename.innerHTML= profile_name;

    // Create the paragraph element for the location
    const loc = document.createElement("p");
    loc.classList = "text-muted mb-2";
    loc.innerHTML = `<i class="bi bi-geo-alt-fill"></i> ${location}`;

    // Create the anchor element for the blog link
    const githubLink = document.createElement("a");
    githubLink.href = url;
    githubLink.className = "text-primary text-decoration-none d-block mb-3";
    githubLink.target = "_blank";
    githubLink.textContent = profile_name;

    ////////////////// Statistics setion//////////////////////////////////
    const statdiv = document.createElement("div");
    statdiv.classList = "d-flex justify-content-around mb-3";


    const divrepo = document.createElement("div");

    const hrepo = document.createElement("h6");
    hrepo.classList = "fw-bold mb-0"
    hrepo.innerHTML = repo;

    const reposmall = document.createElement("small");
    reposmall.classList = "text-muted"
    reposmall.innerHTML = "Repos";

    const divgist = document.createElement("div");

    const hgist = document.createElement("h6");
    hgist.classList = "fw-bold mb-0"
    hgist.innerHTML = gist;

    const smallgist = document.createElement("small");
    smallgist.classList = "text-muted"
    smallgist.innerHTML = "Gists";

    const divfollowers = document.createElement("div");

    const hfollowers = document.createElement("h6");
    hfollowers.classList = "fw-bold mb-0"
    hfollowers.innerHTML = followers;

    const smallfollowers = document.createElement("small");
    smallfollowers.innerHTML ="Followers"

    const divfollowing = document.createElement("div");

    const hfollowing = document.createElement("h6");
    hfollowing.classList = "fw-bold mb-0"
    hfollowing.innerHTML = following;

    const smallfollowing = document.createElement("small");
    smallfollowing.classList = "fw-bold mb-0"
    smallfollowing.innerHTML = "Following";

    const pjoin = document.createElement("p");
    pjoin.classList = "text-muted small mb-0";
    pjoin.innerHTML = `Joined: ${joined}`

    const plastupdated = document.createElement("p");
    plastupdated.classList = "text-muted small mb-0";
    plastupdated.innerHTML = `Last Updated: ${updated}`

    console.log("Done");
    divrepo.appendChild(hrepo);
    divrepo.appendChild(reposmall);

    divgist.appendChild(hgist);
    divgist.appendChild(smallgist);

    divfollowers.appendChild(hfollowers);
    divfollowers.appendChild(smallfollowers);

    divfollowing.appendChild(hfollowing);
    divfollowing.appendChild(smallfollowing);

    
    
    statdiv.appendChild(divrepo);
    statdiv.appendChild(divgist);
    statdiv.appendChild(divfollowers);
    statdiv.appendChild(divfollowing);

    divlev3.appendChild(githubLink);
    divlev3.appendChild(divpic);
    divlev3.appendChild(profilename);
    divlev3.appendChild(loc);
    divlev3.append(statdiv);
    divlev3.appendChild(pjoin);
    divlev3.appendChild(plastupdated);

    divlev2.appendChild(divlev3);
    divlev1.appendChild(divlev2);
    gitStatsResult.appendChild(divlev1);
   
}