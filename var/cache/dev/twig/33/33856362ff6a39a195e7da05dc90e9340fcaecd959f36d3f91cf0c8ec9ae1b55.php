<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* FOSUserBundle:Security:login_content.html.twig */
class __TwigTemplate_349ed315aa64ac5a9d97724d77f2f27c1cd3723370653b53de795b22e2d5959e extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e = $this->extensions["Symfony\\Bundle\\WebProfilerBundle\\Twig\\WebProfilerExtension"];
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->enter($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "FOSUserBundle:Security:login_content.html.twig"));

        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02 = $this->extensions["Symfony\\Bridge\\Twig\\Extension\\ProfilerExtension"];
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->enter($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof = new \Twig\Profiler\Profile($this->getTemplateName(), "template", "FOSUserBundle:Security:login_content.html.twig"));

        // line 2
        echo "

<div class=\"login-wrapper\">
    <section class=\"content\">

        <div style=\"background-color: #242c62;\"> <img class=\"img-fluid\" src=\"http://excel-assurance.com/wp-content/uploads/2019/08/logo_excel-assur_v2_2_275px.png\" width=\"200\" /></div>
";
        // line 8
        if ((isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 8, $this->source); })())) {
            // line 9
            echo "    <div>";
            echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans(twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 9, $this->source); })()), "messageKey", [], "any", false, false, false, 9), twig_get_attribute($this->env, $this->source, (isset($context["error"]) || array_key_exists("error", $context) ? $context["error"] : (function () { throw new RuntimeError('Variable "error" does not exist.', 9, $this->source); })()), "messageData", [], "any", false, false, false, 9), "security"), "html", null, true);
            echo "</div>
";
        }
        // line 11
        echo "




<form action=\"";
        // line 16
        echo $this->extensions['Symfony\Bridge\Twig\Extension\RoutingExtension']->getPath("fos_user_security_check");
        echo "\" method=\"post\">
    ";
        // line 17
        if ((isset($context["csrf_token"]) || array_key_exists("csrf_token", $context) ? $context["csrf_token"] : (function () { throw new RuntimeError('Variable "csrf_token" does not exist.', 17, $this->source); })())) {
            // line 18
            echo "        <input type=\"hidden\" name=\"_csrf_token\" value=\"";
            echo twig_escape_filter($this->env, (isset($context["csrf_token"]) || array_key_exists("csrf_token", $context) ? $context["csrf_token"] : (function () { throw new RuntimeError('Variable "csrf_token" does not exist.', 18, $this->source); })()), "html", null, true);
            echo "\" />
    ";
        }
        // line 20
        echo "
    <div class=\"form-group field-text\">
        <label for=\"username\" class=\"sr-only form-control-label required\">";
        // line 22
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("security.login.username", [], "FOSUserBundle"), "html", null, true);
        echo "</label>
        <div class=\"form-widget form-widget-with-icon\">
            <i class=\"fa fa-fw fa-user\"></i>
            <input type=\"text\" id=\"username\" name=\"_username\" value=\"";
        // line 25
        echo twig_escape_filter($this->env, (isset($context["last_username"]) || array_key_exists("last_username", $context) ? $context["last_username"] : (function () { throw new RuntimeError('Variable "last_username" does not exist.', 25, $this->source); })()), "html", null, true);
        echo "\"  class=\"form-control\" placeholder=\"";
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("security.login.username", [], "FOSUserBundle"), "html", null, true);
        echo "\"  required autofocus>
        </div>
    </div>

    <div class=\"form-group field-password\">
        <label for=\"password\" class=\"sr-only form-control-label required\">";
        // line 30
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("security.login.password", [], "FOSUserBundle"), "html", null, true);
        echo "</label>
        <div class=\"form-widget form-widget-with-icon\">
            <i class=\"fa fa-fw fa-lock\"></i>
            <input type=\"password\"  id=\"password\" name=\"_password\" required=\"required\" autocomplete=\"current-password\" class=\"form-control\" >
        </div>
    </div>

    <input type=\"checkbox\" id=\"remember_me\" name=\"_remember_me\" value=\"on\" />
    <label for=\"remember_me\">";
        // line 38
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("security.login.remember_me", [], "FOSUserBundle"), "html", null, true);
        echo "</label>


    <div class=\"form-group field-button\">
        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" name=\"_submit\" id=\"_submit\" name=\"_submit\" >";
        // line 42
        echo twig_escape_filter($this->env, $this->extensions['Symfony\Bridge\Twig\Extension\TranslationExtension']->trans("security.login.submit", [], "FOSUserBundle"), "html", null, true);
        echo "</button>
    </div>

</form>

    </section>
</div>



";
        
        $__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e->leave($__internal_085b0142806202599c7fe3b329164a92397d8978207a37e79d70b8c52599e33e_prof);

        
        $__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02->leave($__internal_319393461309892924ff6e74d6d6e64287df64b63545b994e100d4ab223aed02_prof);

    }

    public function getTemplateName()
    {
        return "FOSUserBundle:Security:login_content.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  116 => 42,  109 => 38,  98 => 30,  88 => 25,  82 => 22,  78 => 20,  72 => 18,  70 => 17,  66 => 16,  59 => 11,  53 => 9,  51 => 8,  43 => 2,);
    }

    public function getSourceContext()
    {
        return new Source("{% trans_default_domain 'FOSUserBundle' %}


<div class=\"login-wrapper\">
    <section class=\"content\">

        <div style=\"background-color: #242c62;\"> <img class=\"img-fluid\" src=\"http://excel-assurance.com/wp-content/uploads/2019/08/logo_excel-assur_v2_2_275px.png\" width=\"200\" /></div>
{% if error %}
    <div>{{ error.messageKey|trans(error.messageData, 'security') }}</div>
{% endif %}





<form action=\"{{ path(\"fos_user_security_check\") }}\" method=\"post\">
    {% if csrf_token %}
        <input type=\"hidden\" name=\"_csrf_token\" value=\"{{ csrf_token }}\" />
    {% endif %}

    <div class=\"form-group field-text\">
        <label for=\"username\" class=\"sr-only form-control-label required\">{{ 'security.login.username'|trans }}</label>
        <div class=\"form-widget form-widget-with-icon\">
            <i class=\"fa fa-fw fa-user\"></i>
            <input type=\"text\" id=\"username\" name=\"_username\" value=\"{{ last_username }}\"  class=\"form-control\" placeholder=\"{{ 'security.login.username'|trans }}\"  required autofocus>
        </div>
    </div>

    <div class=\"form-group field-password\">
        <label for=\"password\" class=\"sr-only form-control-label required\">{{ 'security.login.password'|trans }}</label>
        <div class=\"form-widget form-widget-with-icon\">
            <i class=\"fa fa-fw fa-lock\"></i>
            <input type=\"password\"  id=\"password\" name=\"_password\" required=\"required\" autocomplete=\"current-password\" class=\"form-control\" >
        </div>
    </div>

    <input type=\"checkbox\" id=\"remember_me\" name=\"_remember_me\" value=\"on\" />
    <label for=\"remember_me\">{{ 'security.login.remember_me'|trans }}</label>


    <div class=\"form-group field-button\">
        <button type=\"submit\" class=\"btn btn-primary btn-lg btn-block\" name=\"_submit\" id=\"_submit\" name=\"_submit\" >{{ 'security.login.submit'|trans }}</button>
    </div>

</form>

    </section>
</div>



", "FOSUserBundle:Security:login_content.html.twig", "/Applications/MAMP/htdocs/projetappmobileExcelencia/src/Resources/FOSUserBundle/views/Security/login_content.html.twig");
    }
}
