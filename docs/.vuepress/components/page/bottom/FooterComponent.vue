<script setup>
</script>

<template>
    <div class="footer__wrapper">
        <footer id="footer-bottom" class="footer footer--bottom">
            <div class="footer__content">
                <span class="copyright">
                    &copy; 2024,&nbsp;
                    <a href="mailto:call@sirthxalot.com" title="Write me an email to call@sirthxalot.com">
                        Alexander Bösch
                    </a>&nbsp;
                    - all rights reserved.
                </span>
            </div>
        </footer>
    </div>
</template>

<style>
.footer__wrapper {
    position: relative;
}

.footer--bottom {
    display: flex;
    position: fixed;
    z-index: 15;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: #fff;
}

.footer--bottom .footer__content {
    display: flex;
    padding: 1rem 0;
    text-align: center;
    width: 100%;
    border-top: solid 1px var(--vp-c-border);
}

.footer--bottom .copyright {
    text-align: center;
    display: inline-flex;
    align-self: center;
    justify-self: center;
    margin: auto;
    font-size: 0.75rem;
}
</style>