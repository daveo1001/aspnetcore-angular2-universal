using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Staticat.ChurchMS.WebClient.Models;

namespace Staticat.ChurchMS.WebClient.Controllers
{
    [Route("[Controller]")]
    public class SettingsController : Controller
    {
        [HttpGet]
        [ProducesResponseType(typeof(Settings), 200)]
        public IActionResult GetSettings()
        {
            var settings = new Settings
            {
                Environment = Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")
            };

            return Ok(settings);
        }
    }
}