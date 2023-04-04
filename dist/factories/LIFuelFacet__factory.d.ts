import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { LIFuelFacet, LIFuelFacetInterface } from "../LIFuelFacet";
declare type LIFuelFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class LIFuelFacet__factory extends ContractFactory {
    constructor(...args: LIFuelFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<LIFuelFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): LIFuelFacet;
    connect(signer: Signer): LIFuelFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b50612801806100206000396000f3fe6080604052600436106100295760003560e01c8063552062161461002e5780639b6ee8e414610043575b600080fd5b61004161003c3660046122c1565b610056565b005b61004161005136600461235b565b610286565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016100d1576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600181553360006100e234476123bf565b905085806101000151610121576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561015f576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b876101828160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156101b9576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001516000036101f7576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610234576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61024989600001518a60c001518a8a336104a8565b60c08a0152610257896105f0565b5047915050818111156102795761027960008461027485856123bf565b61083d565b5050600090915550505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610301576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6001815533600061031234476123bf565b90508380610100015115610352576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8480610120015115610390576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b856103b38160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b156103ea576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610428576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e0015103610465576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61047787608001518860c00151610873565b610480876105f0565b50479150508181111561049d5761049d60008461027485856123bf565b505060009091555050565b6000828082036104e4576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600085856104f36001856123bf565b818110610502576105026123d2565b90506020028101906105149190612401565b61052590608081019060600161243f565b90506000610532826109e9565b905073ffffffffffffffffffffffffffffffffffffffff821661055c5761055934826123bf565b90505b60006105688888610aa2565b90506105748888610bae565b6105818a89898985610c1b565b60008261058d856109e9565b61059791906123bf565b9050898110156105e2576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b9052602481018290526044015b60405180910390fd5b9a9950505050505050505050565b60007fddb1a97e204589b19d70796e7a3363c86670116d11313290b7a7eb064a8f3da1604080518082018252601381527f53657276696365466565436f6c6c6563746f720000000000000000000000000060208201529051610652919061247e565b90815260405190819003602001902054608083015173ffffffffffffffffffffffffffffffffffffffff909116915061069f9073ffffffffffffffffffffffffffffffffffffffff161590565b156107415760c082015160e083015160a08401516040517fdef65669000000000000000000000000000000000000000000000000000000008152600481019290925273ffffffffffffffffffffffffffffffffffffffff908116602483015283169163def65669916044016000604051808303818588803b15801561072357600080fd5b505af1158015610737573d6000803e3d6000fd5b5050505050610802565b6107548260800151828460c00151610fcd565b608082015160c083015160e084015160a08501516040517f1eacd35f00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff9485166004820152602481019390935260448301919091528216606482015290821690631eacd35f90608401600060405180830381600087803b1580156107e957600080fd5b505af11580156107fd573d6000803e3d6000fd5b505050505b7fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161083191906124da565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561086957610864838383611110565b505050565b6108648282611292565b806000036108ad576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166109065780341015610902576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa158015610973573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099791906125ed565b9050818110156109dd576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b610864833330856113bc565b600073ffffffffffffffffffffffffffffffffffffffff821615610a9a576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa158015610a71573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9591906125ed565b610a9c565b475b92915050565b60608160008167ffffffffffffffff811115610ac057610ac0612053565b604051908082528060200260200182016040528015610ae9578160200160208202803683370190505b5090506000805b83811015610ba357868682818110610b0a57610b0a6123d2565b9050602002810190610b1c9190612401565b610b2d90608081019060600161243f565b9150610b38826109e9565b838281518110610b4a57610b4a6123d2565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610b9b5734838281518110610b8357610b836123d2565b60200260200101818151610b9791906123bf565b9052505b600101610af0565b509095945050505050565b60005b818110156108645736838383818110610bcc57610bcc6123d2565b9050602002810190610bde9190612401565b9050610bf060e0820160c08301612606565b15610c1257610c12610c08606083016040840161243f565b8260800135610873565b50600101610bb1565b838383838260018114610ee85760008585610c376001856123bf565b818110610c4657610c466123d2565b9050602002810190610c589190612401565b610c6990608081019060600161243f565b9050600089815b81811015610e1457368d8d83818110610c8b57610c8b6123d2565b9050602002810190610c9d9190612401565b9050610ccc610cb2606083016040840161243f565b73ffffffffffffffffffffffffffffffffffffffff161590565b80610d2f5750610d2f610ce5604083016020840161243f565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610d465750610d46610ce5602083018361243f565b8015610dcb5750610dcb610d5d60a0830183612623565b610d6c9160049160009161268f565b610d75916126b9565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610e01576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610e0b8f826115d6565b50600101610c70565b505060005b610e246001856123bf565b811015610ee0576000888883818110610e3f57610e3f6123d2565b9050602002810190610e519190612401565b610e6290608081019060600161243f565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610ed757858281518110610ea957610ea96123d2565b6020026020010151610eba826109e9565b610ec491906123bf565b92508215610ed757610ed781888561083d565b50600101610e19565b505050610fc1565b8760005b81811015610fbe57368b8b83818110610f0757610f076123d2565b9050602002810190610f199190612401565b9050610f2e610cb2606083016040840161243f565b80610f475750610f47610ce5604083016020840161243f565b8015610f5e5750610f5e610ce5602083018361243f565b8015610f755750610f75610d5d60a0830183612623565b610fab576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610fb58d826115d6565b50600101610eec565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610fed57505050565b73ffffffffffffffffffffffffffffffffffffffff821661103a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156110af573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906110d391906125ed565b1015610864576110e5838360006118ec565b61086483837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6118ec565b73ffffffffffffffffffffffffffffffffffffffff831661115d576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166111aa576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611217573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061123b91906125ed565b905080821115611281576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101839052602481018290526044016105d9565b61128c848484611aec565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166112df576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611322576040517fcf479181000000000000000000000000000000000000000000000000000000008152600481018290524760248201526044016105d9565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461137c576040519150601f19603f3d011682016040523d82523d6000602084013e611381565b606091505b5050905080610864576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8416611409576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216611456576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156114c7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906114eb91906125ed565b90506114f982868686611b42565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611569573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061158d91906125ed565b61159791906123bf565b146115ce576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b6115ec6115e6602083018361243f565b3b151590565b611622576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101356000819003611662576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000611677610cb2606085016040860161243f565b611682576000611688565b82608001355b905060006116a461169f606086016040870161243f565b6109e9565b905060006116bb61169f608087016060880161243f565b9050826000036116f2576116f26116d8606087016040880161243f565b6116e8604088016020890161243f565b8760800135610fcd565b846080013582101561173d576040517fcf47918100000000000000000000000000000000000000000000000000000000815260808601356004820152602481018390526044016105d9565b60008061174d602088018861243f565b73ffffffffffffffffffffffffffffffffffffffff168561177160a08a018a612623565b60405161177f929190612701565b60006040518083038185875af1925050503d80600081146117bc576040519150601f19603f3d011682016040523d82523d6000602084013e6117c1565b606091505b50915091508161180c5760006117d682611ba0565b9050806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d99190612711565b600061182161169f60808a0160608b0161243f565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961185260208b018b61243f565b61186260608c0160408d0161243f565b61187260808d0160608e0161243f565b8c60800135898711611884578661188e565b61188e8a886123bf565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b80158061198c57506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611966573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061198a91906125ed565b155b611a18576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e63650000000000000000000060648201526084016105d9565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108649084907f095ea7b300000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611c1e565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526108649084907fa9059cbb0000000000000000000000000000000000000000000000000000000090606401611a6a565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261128c9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611a6a565b6060604482511015611be557505060408051808201909152601d81527f5472616e73616374696f6e2072657665727465642073696c656e746c79000000602082015290565b6000611c016004808551611bf991906123bf565b859190611d2a565b905080806020019051810190611c179190612724565b9392505050565b6000611c80826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611e449092919063ffffffff16565b8051909150156108645780806020019051810190611c9e919061279b565b610864576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f7420737563636565640000000000000000000000000000000000000000000060648201526084016105d9565b606081611d3881601f6127b8565b1015611d70576040517f47aaf07a00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611d7a82846127b8565b84511015611db4576040517f3b99b53d00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606082158015611dd35760405191506000825260208201604052611e3b565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611e0c578051835260209283019201611df4565b5050858452601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016604052505b50949350505050565b6060611e538484600085611e5b565b949350505050565b606082471015611eed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c000000000000000000000000000000000000000000000000000060648201526084016105d9565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611f16919061247e565b60006040518083038185875af1925050503d8060008114611f53576040519150601f19603f3d011682016040523d82523d6000602084013e611f58565b606091505b5091509150611f6987838387611f74565b979650505050505050565b6060831561200a5782516000036120035773ffffffffffffffffffffffffffffffffffffffff85163b612003576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016105d9565b5081611e53565b611e53838381511561201f5781518083602001fd5b806040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d99190612711565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff811182821017156120a6576120a6612053565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff811182821017156120f3576120f3612053565b604052919050565b600067ffffffffffffffff82111561211557612115612053565b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01660200190565b600082601f83011261215257600080fd5b8135612165612160826120fb565b6120ac565b81815284602083860101111561217a57600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146121bb57600080fd5b919050565b80151581146121ce57600080fd5b50565b80356121bb816121c0565b600061014082840312156121ef57600080fd5b6121f7612082565b905081358152602082013567ffffffffffffffff8082111561221857600080fd5b61222485838601612141565b6020840152604084013591508082111561223d57600080fd5b5061224a84828501612141565b60408301525061225c60608301612197565b606082015261226d60808301612197565b608082015261227e60a08301612197565b60a082015260c082013560c082015260e082013560e08201526101006122a58184016121d1565b908201526101206122b78382016121d1565b9082015292915050565b6000806000604084860312156122d657600080fd5b833567ffffffffffffffff808211156122ee57600080fd5b6122fa878388016121dc565b9450602086013591508082111561231057600080fd5b818601915086601f83011261232457600080fd5b81358181111561233357600080fd5b8760208260051b850101111561234857600080fd5b6020830194508093505050509250925092565b60006020828403121561236d57600080fd5b813567ffffffffffffffff81111561238457600080fd5b611e53848285016121dc565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b81810381811115610a9c57610a9c612390565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261243557600080fd5b9190910192915050565b60006020828403121561245157600080fd5b611c1782612197565b60005b8381101561247557818101518382015260200161245d565b50506000910152565b6000825161243581846020870161245a565b600081518084526124a881602086016020860161245a565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015260006020830151610140806040850152612503610160850183612490565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe085840301606086015261253e8382612490565b9250506060850151612568608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125db8187018315159052565b90950151151593019290925250919050565b6000602082840312156125ff57600080fd5b5051919050565b60006020828403121561261857600080fd5b8135611c17816121c0565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261265857600080fd5b83018035915067ffffffffffffffff82111561267357600080fd5b60200191503681900382131561268857600080fd5b9250929050565b6000808585111561269f57600080fd5b838611156126ac57600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156126f95780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b602081526000611c176020830184612490565b60006020828403121561273657600080fd5b815167ffffffffffffffff81111561274d57600080fd5b8201601f8101841361275e57600080fd5b805161276c612160826120fb565b81815285602083850101111561278157600080fd5b61279282602083016020860161245a565b95945050505050565b6000602082840312156127ad57600080fd5b8151611c17816121c0565b80820180821115610a9c57610a9c61239056fea2646970667358221220e1f8020c5a7967474879dc91d967b24b4067b66b4b57eb4d3a7e1b7a0c7c35a664736f6c63430008110033";
    static readonly abi: readonly [{
        readonly inputs: readonly [];
        readonly name: "CannotBridgeToSameNetwork";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ContractCallNotAllowed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "receivedAmount";
            readonly type: "uint256";
        }];
        readonly name: "CumulativeSlippageTooHigh";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InformationMismatch";
        readonly type: "error";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "uint256";
            readonly name: "required";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "balance";
            readonly type: "uint256";
        }];
        readonly name: "InsufficientBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidAmount";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidContract";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "InvalidReceiver";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NativeAssetTransferFailed";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapDataProvided";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoSwapFromZeroBalance";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NoTransferToNullAddress";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAValidSpender";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "ReentrancyError";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOutOfBounds";
        readonly type: "error";
    }, {
        readonly inputs: readonly [];
        readonly name: "SliceOverflow";
        readonly type: "error";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferCompleted";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receivingAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "amount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "timestamp";
            readonly type: "uint256";
        }];
        readonly name: "LiFiTransferRecovered";
        readonly type: "event";
    }, {
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "LiFiTransferStarted";
        readonly type: "event";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }];
        readonly name: "startBridgeTokensViaLIFuel";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly components: readonly [{
                readonly internalType: "bytes32";
                readonly name: "transactionId";
                readonly type: "bytes32";
            }, {
                readonly internalType: "string";
                readonly name: "bridge";
                readonly type: "string";
            }, {
                readonly internalType: "string";
                readonly name: "integrator";
                readonly type: "string";
            }, {
                readonly internalType: "address";
                readonly name: "referrer";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receiver";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "minAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationChainId";
                readonly type: "uint256";
            }, {
                readonly internalType: "bool";
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
            }, {
                readonly internalType: "bool";
                readonly name: "hasDestinationCall";
                readonly type: "bool";
            }];
            readonly internalType: "struct ILiFi.BridgeData";
            readonly name: "_bridgeData";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "callTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "approveTo";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "sendingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "address";
                readonly name: "receivingAssetId";
                readonly type: "address";
            }, {
                readonly internalType: "uint256";
                readonly name: "fromAmount";
                readonly type: "uint256";
            }, {
                readonly internalType: "bytes";
                readonly name: "callData";
                readonly type: "bytes";
            }, {
                readonly internalType: "bool";
                readonly name: "requiresDeposit";
                readonly type: "bool";
            }];
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly name: "_swapData";
            readonly type: "tuple[]";
        }];
        readonly name: "swapAndStartBridgeTokensViaLIFuel";
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
        readonly type: "function";
    }];
    static createInterface(): LIFuelFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): LIFuelFacet;
}
export {};
