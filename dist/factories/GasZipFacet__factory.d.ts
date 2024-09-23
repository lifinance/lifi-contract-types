import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { GasZipFacet, GasZipFacetInterface } from "../GasZipFacet";
declare type GasZipFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class GasZipFacet__factory extends ContractFactory {
    constructor(...args: GasZipFacetConstructorParams);
    deploy(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<GasZipFacet>;
    getDeployTransaction(_gasZipRouter: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): GasZipFacet;
    connect(signer: Signer): GasZipFacet__factory;
    static readonly bytecode = "0x60a06040523480156200001157600080fd5b506040516200282e3803806200282e833981016040819052620000349162000046565b6001600160a01b031660805262000078565b6000602082840312156200005957600080fd5b81516001600160a01b03811681146200007157600080fd5b9392505050565b6080516127946200009a6000396000818160b1015261087601526127946000f3fe60806040526004361061003f5760003560e01c80633c36bac11461004457806346fd98e214610059578063b78e6e401461008c578063ba956b9a1461009f575b600080fd5b6100576100523660046121ba565b6100f8565b005b34801561006557600080fd5b50610079610074366004612266565b6103bc565b6040519081526020015b60405180910390f35b61005761009a36600461231f565b610479565b3480156100ab57600080fd5b506100d37f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610083565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610173576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610184344761239d565b9050868061010001516101c3576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610120015115610201576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b886102248160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b1561025b576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c00151600003610299576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102d6576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61033289896102e660018261239d565b8181106102f5576102f56123b0565b905060200281019061030791906123df565b61031890608081019060600161241d565b73ffffffffffffffffffffffffffffffffffffffff161590565b610368576040517ff029264900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61037d8a600001518b60c001518b8b336106dd565b60c08b015261038c8a88610820565b5047915050818111156103ae576103ae6000846103a9858561239d565b61090f565b505060009091555050505050565b600060208251111561042f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601260248201527f546f6f206d616e7920636861696e20494473000000000000000000000000000060448201526064015b60405180910390fd5b60005b82518110156104735782818151811061044d5761044d6123b0565b602002602001015160ff16600883901b179150808061046b9061243f565b915050610432565b50919050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016104f4576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155336000610505344761239d565b90508461052a8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610561576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c0015160000361059f576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036105dc576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b858061010001511561061a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8680610120015115610658576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608088015173ffffffffffffffffffffffffffffffffffffffff16156106aa576040517f835733a800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106b48888610820565b5047915050818111156106d1576106d16000846103a9858561239d565b50506000909155505050565b600082808203610719576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000858561072860018561239d565b818110610737576107376123b0565b905060200281019061074991906123df565b61075a90608081019060600161241d565b9050600061076782610945565b905073ffffffffffffffffffffffffffffffffffffffff82166107915761078e348261239d565b90505b600061079d88886109fe565b90506107a98888610b0a565b6107b68a89898985610b77565b6000826107c285610945565b6107cc919061239d565b905089811015610812576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b905260248101829052604401610426565b9a9950505050505050505050565b60c082015160a08301516040517f6e553f650000000000000000000000000000000000000000000000000000000081528335600482015273ffffffffffffffffffffffffffffffffffffffff91821660248201527f000000000000000000000000000000000000000000000000000000000000000090911691636e553f65916044016000604051808303818588803b1580156108bb57600080fd5b505af11580156108cf573d6000803e3d6000fd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f18260405161090391906124e5565b60405180910390a15050565b73ffffffffffffffffffffffffffffffffffffffff83161561093b57610936838383610f0f565b505050565b6109368282611091565b600073ffffffffffffffffffffffffffffffffffffffff8216156109f6576040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff8316906370a0823190602401602060405180830381865afa1580156109cd573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109f191906125f8565b6109f8565b475b92915050565b60608160008167ffffffffffffffff811115610a1c57610a1c611f48565b604051908082528060200260200182016040528015610a45578160200160208202803683370190505b5090506000805b83811015610aff57868682818110610a6657610a666123b0565b9050602002810190610a7891906123df565b610a8990608081019060600161241d565b9150610a9482610945565b838281518110610aa657610aa66123b0565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610af75734838281518110610adf57610adf6123b0565b60200260200101818151610af3919061239d565b9052505b600101610a4c565b509095945050505050565b60005b818110156109365736838383818110610b2857610b286123b0565b9050602002810190610b3a91906123df565b9050610b4c60e0820160c08301612611565b15610b6e57610b6e610b64606083016040840161241d565b82608001356111bb565b50600101610b0d565b838383838260018114610e2a5760008585610b9360018561239d565b818110610ba257610ba26123b0565b9050602002810190610bb491906123df565b610bc590608081019060600161241d565b9050600089815b81811015610d5657368d8d83818110610be757610be76123b0565b9050602002810190610bf991906123df565b9050610c0e610318606083016040840161241d565b80610c715750610c71610c27604083016020840161241d565b73ffffffffffffffffffffffffffffffffffffffff1660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1e602052604090205460ff1690565b8015610c885750610c88610c27602083018361241d565b8015610d0d5750610d0d610c9f60a083018361262e565b610cae9160049160009161269a565b610cb7916126c4565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f1f602052604090205460ff1690565b610d43576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610d4d8f82611331565b50600101610bcc565b505060005b610d6660018561239d565b811015610e22576000888883818110610d8157610d816123b0565b9050602002810190610d9391906123df565b610da490608081019060600161241d565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610e1957858281518110610deb57610deb6123b0565b6020026020010151610dfc82610945565b610e06919061239d565b92508215610e1957610e1981888561090f565b50600101610d5b565b505050610f03565b8760005b81811015610f0057368b8b83818110610e4957610e496123b0565b9050602002810190610e5b91906123df565b9050610e70610318606083016040840161241d565b80610e895750610e89610c27604083016020840161241d565b8015610ea05750610ea0610c27602083018361241d565b8015610eb75750610eb7610c9f60a083018361262e565b610eed576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610ef78d82611331565b50600101610e2e565b50505b50505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8316610f5c576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff8216610fa9576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015260009073ffffffffffffffffffffffffffffffffffffffff8516906370a0823190602401602060405180830381865afa158015611016573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061103a91906125f8565b905080821115611080576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610426565b61108b84848461160f565b50505050565b73ffffffffffffffffffffffffffffffffffffffff82166110de576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b47811115611121576040517fcf47918100000000000000000000000000000000000000000000000000000000815260048101829052476024820152604401610426565b60008273ffffffffffffffffffffffffffffffffffffffff168260405160006040518083038185875af1925050503d806000811461117b576040519150601f19603f3d011682016040523d82523d6000602084013e611180565b606091505b5050905080610936576040517f5a04673700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b806000036111f5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661124e578034101561124a576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815233600482015260009073ffffffffffffffffffffffffffffffffffffffff8416906370a0823190602401602060405180830381865afa1580156112bb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906112df91906125f8565b905081811015611325576040517fcf4791810000000000000000000000000000000000000000000000000000000081526004810183905260248101829052604401610426565b610936833330856116e3565b611347611341602083018361241d565b3b151590565b61137d576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b608081013560008190036113bd576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006113d2610318606085016040860161241d565b6113dd5760006113e3565b82608001355b905060006113ff6113fa606086016040870161241d565b610945565b905060006114166113fa608087016060880161241d565b90508260000361144d5761144d611433606087016040880161241d565b611443604088016020890161241d565b87608001356118fd565b8460800135821015611498576040517fcf4791810000000000000000000000000000000000000000000000000000000081526080860135600482015260248101839052604401610426565b6000806114a8602088018861241d565b73ffffffffffffffffffffffffffffffffffffffff16856114cc60a08a018a61262e565b6040516114da92919061270c565b60006040518083038185875af1925050503d8060008114611517576040519150601f19603f3d011682016040523d82523d6000602084013e61151c565b606091505b50915091508161152f5761152f81611a40565b60006115446113fa60808a0160608b0161241d565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b388961157560208b018b61241d565b61158560608c0160408d0161241d565b61159560808d0160608e0161241d565b8c608001358987116115a757866115b1565b6115b18a8861239d565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a1505050505050505050565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109369084907fa9059cbb00000000000000000000000000000000000000000000000000000000906064015b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff0000000000000000000000000000000000000000000000000000000090931692909217909152611a4a565b73ffffffffffffffffffffffffffffffffffffffff8416611730576040517fd1bebf0c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff821661177d576040517f21f7434500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff838116600483015285916000918316906370a0823190602401602060405180830381865afa1580156117ee573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061181291906125f8565b905061182082868686611b59565b6040517f70a0823100000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff8581166004830152849183918516906370a0823190602401602060405180830381865afa158015611890573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118b491906125f8565b6118be919061239d565b146118f5576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b505050505050565b73ffffffffffffffffffffffffffffffffffffffff831661191d57505050565b73ffffffffffffffffffffffffffffffffffffffff821661196a576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015282919085169063dd62ed3e90604401602060405180830381865afa1580156119df573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a0391906125f8565b101561093657611a1583836000611bb7565b61093683837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff611bb7565b8051602082018181fd5b6000611aac826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff16611d399092919063ffffffff16565b9050805160001480611acd575080806020019051810190611acd919061271c565b610936576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e60448201527f6f742073756363656564000000000000000000000000000000000000000000006064820152608401610426565b60405173ffffffffffffffffffffffffffffffffffffffff8085166024830152831660448201526064810182905261108b9085907f23b872dd0000000000000000000000000000000000000000000000000000000090608401611661565b801580611c5757506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff838116602483015284169063dd62ed3e90604401602060405180830381865afa158015611c31573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611c5591906125f8565b155b611ce3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603660248201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60448201527f20746f206e6f6e2d7a65726f20616c6c6f77616e6365000000000000000000006064820152608401610426565b60405173ffffffffffffffffffffffffffffffffffffffff83166024820152604481018290526109369084907f095ea7b30000000000000000000000000000000000000000000000000000000090606401611661565b6060611d488484600085611d50565b949350505050565b606082471015611de2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f60448201527f722063616c6c00000000000000000000000000000000000000000000000000006064820152608401610426565b6000808673ffffffffffffffffffffffffffffffffffffffff168587604051611e0b9190612739565b60006040518083038185875af1925050503d8060008114611e48576040519150601f19603f3d011682016040523d82523d6000602084013e611e4d565b606091505b5091509150611e5e87838387611e69565b979650505050505050565b60608315611eff578251600003611ef85773ffffffffffffffffffffffffffffffffffffffff85163b611ef8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152606401610426565b5081611d48565b611d488383815115611f145781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610426919061274b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051610140810167ffffffffffffffff81118282101715611f9b57611f9b611f48565b60405290565b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715611fe857611fe8611f48565b604052919050565b600082601f83011261200157600080fd5b813567ffffffffffffffff81111561201b5761201b611f48565b61204c60207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f84011601611fa1565b81815284602083860101111561206157600080fd5b816020850160208301376000918101602001919091529392505050565b803573ffffffffffffffffffffffffffffffffffffffff811681146120a257600080fd5b919050565b80151581146120b557600080fd5b50565b80356120a2816120a7565b600061014082840312156120d657600080fd5b6120de611f77565b905081358152602082013567ffffffffffffffff808211156120ff57600080fd5b61210b85838601611ff0565b6020840152604084013591508082111561212457600080fd5b5061213184828501611ff0565b6040830152506121436060830161207e565b60608201526121546080830161207e565b608082015261216560a0830161207e565b60a082015260c082013560c082015260e082013560e082015261010061218c8184016120b8565b9082015261012061219e8382016120b8565b9082015292915050565b60006020828403121561047357600080fd5b600080600080606085870312156121d057600080fd5b843567ffffffffffffffff808211156121e857600080fd5b6121f4888389016120c3565b9550602087013591508082111561220a57600080fd5b818701915087601f83011261221e57600080fd5b81358181111561222d57600080fd5b8860208260051b850101111561224257600080fd5b60208301955080945050505061225b86604087016121a8565b905092959194509250565b6000602080838503121561227957600080fd5b823567ffffffffffffffff8082111561229157600080fd5b818501915085601f8301126122a557600080fd5b8135818111156122b7576122b7611f48565b8060051b91506122c8848301611fa1565b81815291830184019184810190888411156122e257600080fd5b938501935b83851015612313578435925060ff831683146123035760008081fd5b82825293850193908501906122e7565b98975050505050505050565b6000806040838503121561233257600080fd5b823567ffffffffffffffff81111561234957600080fd5b612355858286016120c3565b92505061236584602085016121a8565b90509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b818103818111156109f8576109f861236e565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600082357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff2183360301811261241357600080fd5b9190910192915050565b60006020828403121561242f57600080fd5b6124388261207e565b9392505050565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82036124705761247061236e565b5060010190565b60005b8381101561249257818101518382015260200161247a565b50506000910152565b600081518084526124b3816020860160208601612477565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b60208152815160208201526000602083015161014080604085015261250e61016085018361249b565b915060408501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0858403016060860152612549838261249b565b9250506060850151612573608086018273ffffffffffffffffffffffffffffffffffffffff169052565b50608085015173ffffffffffffffffffffffffffffffffffffffff811660a08601525060a085015173ffffffffffffffffffffffffffffffffffffffff811660c08601525060c085015160e085015260e08501516101008181870152808701519150506101206125e68187018315159052565b90950151151593019290925250919050565b60006020828403121561260a57600080fd5b5051919050565b60006020828403121561262357600080fd5b8135612438816120a7565b60008083357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe184360301811261266357600080fd5b83018035915067ffffffffffffffff82111561267e57600080fd5b60200191503681900382131561269357600080fd5b9250929050565b600080858511156126aa57600080fd5b838611156126b757600080fd5b5050820193919092039150565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156127045780818660040360031b1b83161692505b505092915050565b8183823760009101908152919050565b60006020828403121561272e57600080fd5b8151612438816120a7565b60008251612413818460208701612477565b602081526000612438602083018461249b56fea26469706673582212204e7f2b2d4829c1c6a01dabfc2f6649d320253cc7fa1696d6e85c082587ddd55d64736f6c63430008110033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_gasZipRouter";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "gasZipRouter";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract IGasZip";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "getDestinationChainsValue";
        readonly inputs: readonly [{
            readonly name: "_chainIds";
            readonly type: "uint8[]";
            readonly internalType: "uint8[]";
        }];
        readonly outputs: readonly [{
            readonly name: "destinationChains";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "pure";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaGasZip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaGasZip";
        readonly inputs: readonly [{
            readonly name: "_bridgeData";
            readonly type: "tuple";
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_swapData";
            readonly type: "tuple[]";
            readonly internalType: "struct LibSwap.SwapData[]";
            readonly components: readonly [{
                readonly name: "callTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "approveTo";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receivingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "fromAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "callData";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "requiresDeposit";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }, {
            readonly name: "_gasZipData";
            readonly type: "tuple";
            readonly internalType: "struct IGasZip.GasZipData";
            readonly components: readonly [{
                readonly name: "destinationChains";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "LiFiGenericSwapCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiSwappedGeneric";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "integrator";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "referrer";
            readonly type: "string";
            readonly indexed: false;
            readonly internalType: "string";
        }, {
            readonly name: "fromAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "toAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "fromAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "toAmount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferCompleted";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferRecovered";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "receivingAssetId";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "receiver";
            readonly type: "address";
            readonly indexed: false;
            readonly internalType: "address";
        }, {
            readonly name: "amount";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "LiFiTransferStarted";
        readonly inputs: readonly [{
            readonly name: "bridgeData";
            readonly type: "tuple";
            readonly indexed: false;
            readonly internalType: "struct ILiFi.BridgeData";
            readonly components: readonly [{
                readonly name: "transactionId";
                readonly type: "bytes32";
                readonly internalType: "bytes32";
            }, {
                readonly name: "bridge";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "integrator";
                readonly type: "string";
                readonly internalType: "string";
            }, {
                readonly name: "referrer";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "sendingAssetId";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "receiver";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "minAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "destinationChainId";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "hasSourceSwaps";
                readonly type: "bool";
                readonly internalType: "bool";
            }, {
                readonly name: "hasDestinationCall";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly anonymous: false;
    }, {
        readonly type: "error";
        readonly name: "CannotBridgeToSameNetwork";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ContractCallNotAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "CumulativeSlippageTooHigh";
        readonly inputs: readonly [{
            readonly name: "minAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "receivedAmount";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InformationMismatch";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InsufficientBalance";
        readonly inputs: readonly [{
            readonly name: "required";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }, {
            readonly name: "balance";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
    }, {
        readonly type: "error";
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NativeAssetTransferFailed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapDataProvided";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoSwapFromZeroBalance";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NoTransferToNullAddress";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "NullAddrIsNotAnERC20Token";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlyNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "OnlySwapsFromERC20ToNativeAllowed";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): GasZipFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): GasZipFacet;
}
export {};
