# SENDIT

![](./logo.png)

SendIT is a courier service that helps users deliver parcels to different destinations. SendIT provides courier quotes based on weight categories.

## Features:

- [x] Design homepage
- [x] make sure it is responsive
- [x] add button link to login page
- [x] add introductory message section
- [x] Create login page
  - [x] User must provide username and password
  - [x] Design to make it look good (responsive)
  - [x] Add sign up link If user don't have account
- [x] Create a signup page
  - [x] Names,Address,email,password and password confirmation required
  - [x] Design to make it look good
  - [x] If User already has account add login link to redirect to login page
    - [ ] Else can sign up
- [x] Parcel Create page
  - [x] User can create/edit/delete/update parcel
  - [x] Create
    - [ ] If user logged in
  - [x] List/details of parcel
    - [ ] If user logged in
  - [x] update
    - [ ] if user logged in
  - [x] delete
    - [ ] If user logged in
- [x] User can change location of parcel delivery
  - [x] if the parcel is not yet marked as delivered by admin
- [ ] Restrict editing/creating location to user
- [x] User can cancel parcel
  - [] Restrict to user owner
- [x] Create / Design admin dashboard
  - [x] restrict to Admin user
  - [x] Admin can change the status and present location of a parcel delivery order

### Optional Features:

- The application should display a Google Map with Markers showing the pickup location
  and the destination.
- The application should display computed travel distance and journey duration between
  the pickup location and the destination. Leverage Google Maps Distance Matri Service.
- The user gets real-time email notification when Admin changes the status of their parcel.
- The user gets real-time email notification when Admin changes the present location of
  their parcel.

## Technologies that will be used for UI Template:

- HTML 5
- Css
- Javascript

## Technologies that will be used for api:

- Server-side Framework: ​Node/Express
- Linting Library: ​ESLint
- Style Guide: ​Airbnb
- Testing Framework: ​Mocha ​​ or ​ Jasmine
