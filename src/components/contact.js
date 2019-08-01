/** @format */

const formHTML = `<div><div id="mc_embed_signup">
<form
    action="https://gmail.us3.list-manage.com/subscribe/post?u=cf4c8e47ea13f2921ab524ad1&amp;id=c403735431"
    method="post"
    id="mc-embedded-subscribe-form"
    name="mc-embedded-subscribe-form"
    class="validate"
    target="_blank"
    novalidate
>
    <div id="mc_embed_signup_scroll">
        <h2>Subscribe</h2>
        <div class="indicates-required"><span class="asterisk">*</span> indicates required</div>
        <div class="mc-field-group">
            <label for="mce-EMAIL">Email Address <span class="asterisk">*</span> </label>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL" />
        </div>
        <div class="mc-field-group">
            <label for="mce-NAME">Name </label>
            <input type="text" value="" name="NAME" class="" id="mce-NAME" />
        </div>
        <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response" style="display:none"></div>
            <div class="response" id="mce-success-response" style="display:none"></div>
        </div>
        <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
        <div style="position: absolute; left: -5000px;" aria-hidden="true">
            <input type="text" name="b_cf4c8e47ea13f2921ab524ad1_c403735431" tabindex="-1" value="" />
        </div>
        <div class="clear">
            <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button button--secondary--mc" />
        </div>
    </div>
</form>
</div></div>`;

export default function contactPage() {
	let arr = {
		markup(post) {
			return [
				{
					'article.page': [
						{
							'h1.page__title': post.title.rendered,
						},
						{
							'div.page__body': post.content.rendered,
						},
						{
							'div.contact__images': [
								{
									[`a.contact__link[target=_blank[href="${post.acf.left_side_image_link_url}"`]: [
										{
											'img.contact__image.contact__image--left': { src: post.acf.left_side_image },
										},
									],
								},
								{
									[`a.contact__link[target=_blank[href="${post.acf.right_side_image_link_url}"`]: [
										{
											'img.contact__image.contact__image--right': { src: post.acf.right_side_image },
										},
									],
								},
							],
						},
						{
							hr: '',
						},
						{
							'div.formHTML': formHTML,
						},
					],
				},
			];
		},
		events() {
			document.querySelector('#mc-embedded-subscribe').addEventListener('click', function() {
				let y = document.querySelector('.contact--success');
				y && document.removeChild(y);
				document.querySelector('#mce-NAME').value = '';
				document.querySelector('#mce-EMAIL').value = '';
				let x = document.createElement('div');
				x.innerHTML = `<div class='contact--success'><p>You are now subscribed to K. R. Monin!</p></div>`;
				document.querySelector('#mc_embed_signup').appendChild(x);
			});
		},
	};

	return arr;
}
