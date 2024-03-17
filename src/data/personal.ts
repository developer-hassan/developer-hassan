// Personal information
export const NAME = "Muhammad Hassan";
export const PROFESSION = "Python and Generative AI Engineer";
export const YEARS_OF_EXPERIENCE = calculateYearsOfExperience();

// Contact information
export const EMAIL = "hassanasim5567@gmail.com";
export const LINKED_IN_URL = "https://www.linkedin.com/in/developer-hassan/";
export const GITHUB_URL = "https://github.com/developer-hassan";

// Assets
export const CV_NAME = "cv.pdf";
export const PROFILE_IMAGE_PATH = "/header.jpg";

// Helpers
function calculateYearsOfExperience(from = "2020-06-01") {
  return (
    Math.round(
      (Date.now() - Date.parse(from)) / (1000 * 60 * 60 * 24 * 365.25),
    ) || 0
  );
}
