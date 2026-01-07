import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { AcrossV4SwapFacet, AcrossV4SwapFacetInterface } from "../AcrossV4SwapFacet";
type AcrossV4SwapFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class AcrossV4SwapFacet__factory extends ContractFactory {
    constructor(...args: AcrossV4SwapFacetConstructorParams);
    deploy(_spokePoolPeriphery: PromiseOrValue<string>, _spokePool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<AcrossV4SwapFacet>;
    getDeployTransaction(_spokePoolPeriphery: PromiseOrValue<string>, _spokePool: PromiseOrValue<string>, overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): AcrossV4SwapFacet;
    connect(signer: Signer): AcrossV4SwapFacet__factory;
    static readonly bytecode = "0x60c060405234801561000f575f5ffd5b5060405161260438038061260483398101604081905261002e91610097565b6001600160a01b038216158061004b57506001600160a01b038116155b15610069576040516306b7c75960e31b815260040160405180910390fd5b6001600160a01b039182166080521660a0526100cf565b6001600160a01b0381168114610094575f5ffd5b50565b5f5f604083850312156100a8575f5ffd5b82516100b381610080565b60208401519092506100c481610080565b809150509250929050565b60805160a0516125016101035f395f818160780152610a1201525f818160ea0152818161091c0152610a5401526125015ff3fe608060405260043610610063575f3560e01c8063ae16662a11610041578063ae16662a1461010c578063e796cd981461011f578063f97136af14610146575f5ffd5b80638021fef71461006757806393514c65146100c4578063991fe590146100d9575b5f5ffd5b348015610072575f5ffd5b5061009a7f000000000000000000000000000000000000000000000000000000000000000081565b60405173ffffffffffffffffffffffffffffffffffffffff90911681526020015b60405180910390f35b6100d76100d2366004611b6d565b610161565b005b3480156100e4575f5ffd5b5061009a7f000000000000000000000000000000000000000000000000000000000000000081565b6100d761011a366004611bd2565b61038e565b34801561012a575f5ffd5b50610138651f2abb7bf89b81565b6040519081526020016100bb565b348015610151575f5ffd5b50610138670de0b6b3a764000081565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016101dc576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6101ec3447611cc5565b9050846102118160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610248576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f03610285576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036102c2576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8580610100015115610300576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b868061012001511561033e576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61035088608001518960c0015161063f565b6103628861035d89611deb565b6106f3565b504791505081811115610383576103835f8461037e8585611cc5565b610b17565b50505f909155505050565b7fa65bb2f450488ab0858c00edc14abc5297769bf42adb48cfb77752890e8b697b80547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01610409576040517f29f745a700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60018155335f6104193447611cc5565b90508661043e8160a0015173ffffffffffffffffffffffffffffffffffffffff161590565b15610475576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8060c001515f036104b2576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b468160e00151036104ef576040517f4ac09ad300000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8780610100015161052c576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b888061012001511561056a576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60c08a01518a5161057e90828c8c33610b4c565b60c08c01525f61058d89611deb565b9050818c60c00151111561060a57670de0b6b3a76400006105b460e08b0160c08c01611eb9565b6fffffffffffffffffffffffffffffffff168d60c001516105d59190611ed9565b6105df9190611ef0565b81516040015260c08c015182906105fa9060a08c0135611ed9565b6106049190611ef0565b60a08201525b6106148c826106f3565b5047935050505081811115610632576106325f8461037e8585611cc5565b50505f9091555050505050565b805f03610678576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b73ffffffffffffffffffffffffffffffffffffffff82166106d157803410156106cd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5050565b6106cd73ffffffffffffffffffffffffffffffffffffffff8316333084610c8e565b7311f111f111f111f111f111f111f111f111f111f173ffffffffffffffffffffffffffffffffffffffff168260a0015173ffffffffffffffffffffffffffffffffffffffff160361080f575f61074c8360e00151610ce6565b825160a00151909150811461078d576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8151608001516107c9576040517f58b0510000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60e083015183518351608001516040519081527f815cd8dc72093a13fe3577112c391b6279303956526382ab98772d0239dbf78c9060200160405180910390a35061088d565b60e0820151815160a0015114610851576040517f50dc905c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516080015161088d576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80516060015173ffffffffffffffffffffffffffffffffffffffff166108df576040517f1c49f4d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f610902836080015173ffffffffffffffffffffffffffffffffffffffff161590565b15610912575060c0820151610945565b61094583608001517f00000000000000000000000000000000000000000000000000000000000000008560c00151610d0b565b5f60405180610160016040528060405180604001604052805f81526020015f73ffffffffffffffffffffffffffffffffffffffff168152508152602001845f01518152602001846020015173ffffffffffffffffffffffffffffffffffffffff168152602001846040015173ffffffffffffffffffffffffffffffffffffffff168152602001846060015160028111156109e1576109e1611f28565b81526020018560c0015181526020018460a001518152602001846080015181526020018460e00151151581526020017f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1681526020015f81525090507f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663110560ad83836040518363ffffffff1660e01b8152600401610aac91906120c0565b5f604051808303818588803b158015610ac3575f5ffd5b505af1158015610ad5573d5f5f3e3d5ffd5b50505050507fcba69f43792f9f399347222505213b55af8e0b0b54b893085c2e27ecbe1644f184604051610b099190612202565b60405180910390a150505050565b73ffffffffffffffffffffffffffffffffffffffff8316610b4157610b3c8282610d37565b505050565b610b3c838383610da4565b5f82808203610b87576040517f0503c3ed00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f8585610b95600185611cc5565b818110610ba457610ba4612315565b9050602002810190610bb69190612342565b610bc790608081019060600161237e565b90505f610bd382610e12565b905073ffffffffffffffffffffffffffffffffffffffff8216610bfd57610bfa3482611cc5565b90505b5f610c088888610e5c565b9050610c148888610f66565b610c218a89898985610fd2565b5f82610c2c85610e12565b610c369190611cc5565b905089811015610c80576040517f275c273c000000000000000000000000000000000000000000000000000000008152600481018b90526024810182905260440160405180910390fd5b9a9950505050505050505050565b60405181606052826040528360601b602c526f23b872dd000000000000000000000000600c5260205f6064601c5f895af13d1560015f51141716610cd957637939f4245f526004601cfd5b5f60605260405250505050565b5f660416edef1601be8203610d025750651f2abb7bf89b919050565b5090565b919050565b610b3c8383837fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61121a565b73ffffffffffffffffffffffffffffffffffffffff8216610d84576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6106cd73ffffffffffffffffffffffffffffffffffffffff831682611347565b73ffffffffffffffffffffffffffffffffffffffff8216610df1576040517f1e4ec46b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610b3c73ffffffffffffffffffffffffffffffffffffffff84168383611360565b5f73ffffffffffffffffffffffffffffffffffffffff821615610e5457610e4f73ffffffffffffffffffffffffffffffffffffffff8316306113a9565b610e56565b475b92915050565b6060815f8167ffffffffffffffff811115610e7957610e796118ee565b604051908082528060200260200182016040528015610ea2578160200160208202803683370190505b5090505f5f5b83811015610f5b57868682818110610ec257610ec2612315565b9050602002810190610ed49190612342565b610ee590608081019060600161237e565b9150610ef082610e12565b838281518110610f0257610f02612315565b602090810291909101015273ffffffffffffffffffffffffffffffffffffffff8216610f535734838281518110610f3b57610f3b612315565b60200260200101818151610f4f9190611cc5565b9052505b600101610ea8565b509095945050505050565b5f5b81811015610b3c5736838383818110610f8357610f83612315565b9050602002810190610f959190612342565b9050610fa760e0820160c08301612397565b15610fc957610fc9610fbf606083016040840161237e565b826080013561063f565b50600101610f68565b83838383825f80805b838110156111fe57368c8c83818110610ff657610ff6612315565b90506020028101906110089190612342565b9050611017602082018261237e565b9350611029604082016020830161237e565b92506110cc8461103c60a08401846123b0565b61104a916004915f91612418565b6110539161243f565b73ffffffffffffffffffffffffffffffffffffffff919091165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff000000000000000000000000000000000000000000000000000000009094168352929052205460ff1690565b15806111b457506111006110e6606083016040840161237e565b73ffffffffffffffffffffffffffffffffffffffff161590565b15801561113957508373ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614155b80156111b4575073ffffffffffffffffffffffffffffffffffffffff83165f9081527f7a8ac5d3b7183f220a0602439da45ea337311d699902d1ed11a3725a714e7f24602090815260408083207fffffffff00000000000000000000000000000000000000000000000000000000845290915290205460ff16155b156111eb576040517f9453980400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6111f58e826113dc565b50600101610fdb565b5050505061120f848484845f61164f565b505050505050505050565b73ffffffffffffffffffffffffffffffffffffffff8416156113415773ffffffffffffffffffffffffffffffffffffffff8316611283576040517f63ba9bff00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815230600482015273ffffffffffffffffffffffffffffffffffffffff848116602483015283919086169063dd62ed3e90604401602060405180830381865afa1580156112f6573d5f5f3e3d5ffd5b505050506040513d601f19601f8201168201806040525081019061131a91906124a5565b10156113415761134173ffffffffffffffffffffffffffffffffffffffff85168483611866565b50505050565b5f385f3884865af16106cd5763b12d13eb5f526004601cfd5b81601452806034526fa9059cbb0000000000000000000000005f5260205f604460105f875af13d1560015f511417166113a0576390b8ec185f526004601cfd5b5f603452505050565b5f816014526f70a082310000000000000000000000005f5260208060246010865afa601f3d111660205102905092915050565b6113f46113ec602083018361237e565b6017903b1190565b61142a576040517f6eefed2000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60808101355f819003611469576040517fe46e079c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b5f61147d6110e6606085016040860161237e565b611487575f61148d565b82608001355b90505f6114a86114a3608086016060870161237e565b610e12565b9050815f036114de576114de6114c4606086016040870161237e565b6114d4604087016020880161237e565b8660800135610d0b565b5f806114ed602087018761237e565b73ffffffffffffffffffffffffffffffffffffffff168461151160a08901896123b0565b60405161151f9291906124bc565b5f6040518083038185875af1925050503d805f8114611559576040519150601f19603f3d011682016040523d82523d5f602084013e61155e565b606091505b50915091508161157157611571816118e4565b5f6115856114a36080890160608a0161237e565b90507f7bfdfdb5e3a3776976e53cb0607060f54c5312701c8cba1155cc4d5394440b38886115b660208a018a61237e565b6115c660608b0160408c0161237e565b6115d660808c0160608d0161237e565b8b608001358987116115e857866115f2565b6115f28a88611cc5565b6040805196875273ffffffffffffffffffffffffffffffffffffffff95861660208801529385169386019390935292166060840152608083019190915260a08201524260c082015260e00160405180910390a15050505050505050565b835f868261165e600182611cc5565b81811061166d5761166d612315565b905060200281019061167f9190612342565b61169090608081019060600161237e565b90505f5f5f5f5f5f5f5b88811015611856576116ad60018a611cc5565b811080156116bc575088600114155b15611797578d8d828181106116d3576116d3612315565b90506020028101906116e59190612342565b6116f690608081019060600161237e565b95508773ffffffffffffffffffffffffffffffffffffffff168673ffffffffffffffffffffffffffffffffffffffff1614611797578a818151811061173d5761173d612315565b602002602001015161174e87610e12565b6117589190611cc5565b965073ffffffffffffffffffffffffffffffffffffffff86161561177c575f61177e565b895b93508387111561179757611797868d61037e878b611cc5565b8d8d828181106117a9576117a9612315565b90506020028101906117bb9190612342565b6117cc90606081019060400161237e565b94506117d785610e12565b925073ffffffffffffffffffffffffffffffffffffffff8516156117fb575f6117fd565b895b9150818311801561183a57508773ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff1614155b1561184e5761184e858d61037e8587611cc5565b60010161169a565b5050505050505050505050505050565b81601452806034526f095ea7b30000000000000000000000005f5260205f604460105f875af13d1560015f511417166113a0575f6034526f095ea7b30000000000000000000000005f525f38604460105f875af1508060345260205f604460105f875af13d1560015f511417166113a057633e3f8f735f526004601cfd5b8051602082018181fd5b7f4e487b71000000000000000000000000000000000000000000000000000000005f52604160045260245ffd5b604051610140810167ffffffffffffffff8111828210171561193f5761193f6118ee565b60405290565b604051610160810167ffffffffffffffff8111828210171561193f5761193f6118ee565b604051610100810167ffffffffffffffff8111828210171561193f5761193f6118ee565b5f82601f83011261199c575f5ffd5b8135602083015f5f67ffffffffffffffff8411156119bc576119bc6118ee565b506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f85018116603f0116810181811067ffffffffffffffff82111715611a0957611a096118ee565b604052838152905080828401871015611a20575f5ffd5b838360208301375f602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610d06575f5ffd5b80358015158114610d06575f5ffd5b5f6101408284031215611a7f575f5ffd5b611a8761191b565b823581529050602082013567ffffffffffffffff811115611aa6575f5ffd5b611ab28482850161198d565b602083015250604082013567ffffffffffffffff811115611ad1575f5ffd5b611add8482850161198d565b604083015250611aef60608301611a3c565b6060820152611b0060808301611a3c565b6080820152611b1160a08301611a3c565b60a082015260c0828101359082015260e08083013590820152611b376101008301611a5f565b610100820152611b4a6101208301611a5f565b61012082015292915050565b5f6101008284031215611b67575f5ffd5b50919050565b5f5f60408385031215611b7e575f5ffd5b823567ffffffffffffffff811115611b94575f5ffd5b611ba085828601611a6e565b925050602083013567ffffffffffffffff811115611bbc575f5ffd5b611bc885828601611b56565b9150509250929050565b5f5f5f5f60608587031215611be5575f5ffd5b843567ffffffffffffffff811115611bfb575f5ffd5b611c0787828801611a6e565b945050602085013567ffffffffffffffff811115611c23575f5ffd5b8501601f81018713611c33575f5ffd5b803567ffffffffffffffff811115611c49575f5ffd5b8760208260051b8401011115611c5d575f5ffd5b60209190910193509150604085013567ffffffffffffffff811115611c80575f5ffd5b611c8c87828801611b56565b91505092959194509250565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52601160045260245ffd5b81810381811115610e5657610e56611c98565b803563ffffffff81168114610d06575f5ffd5b5f6101608284031215611cfc575f5ffd5b611d04611945565b9050611d0f82611a3c565b81526020828101359082015260408083013590820152611d3160608301611a3c565b60608201526080828101359082015260a0808301359082015260c08083013590820152611d6060e08301611cd8565b60e0820152611d726101008301611cd8565b610100820152611d856101208301611cd8565b61012082015261014082013567ffffffffffffffff811115611da5575f5ffd5b611db18482850161198d565b6101408301525092915050565b803560038110610d06575f5ffd5b80356fffffffffffffffffffffffffffffffff81168114610d06575f5ffd5b5f6101008236031215611dfc575f5ffd5b611e04611969565b823567ffffffffffffffff811115611e1a575f5ffd5b611e2636828601611ceb565b825250611e3560208401611a3c565b6020820152611e4660408401611a3c565b6040820152611e5760608401611dbe565b6060820152608083013567ffffffffffffffff811115611e75575f5ffd5b611e813682860161198d565b60808301525060a08381013590820152611e9d60c08401611dcc565b60c0820152611eae60e08401611a5f565b60e082015292915050565b5f60208284031215611ec9575f5ffd5b611ed282611dcc565b9392505050565b8082028115828204841417610e5657610e56611c98565b5f82611f23577f4e487b71000000000000000000000000000000000000000000000000000000005f52601260045260245ffd5b500490565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b5f81518084528060208401602086015e5f6020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b805173ffffffffffffffffffffffffffffffffffffffff16825260208101516020830152604081015160408301525f6060820151611ff7606085018273ffffffffffffffffffffffffffffffffffffffff169052565b506080820151608084015260a082015160a084015260c082015160c084015260e082015161202d60e085018263ffffffff169052565b5061010082015161204761010085018263ffffffff169052565b5061012082015161206161012085018263ffffffff169052565b5061014082015161016061014085015261207f610160850182611f55565b949350505050565b600381106120bc577f4e487b71000000000000000000000000000000000000000000000000000000005f52602160045260245ffd5b9052565b60208082528251805183830152015173ffffffffffffffffffffffffffffffffffffffff1660408201525f602083015161018060608401526121066101a0840182611fa1565b9050604084015161212f608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50606084015173ffffffffffffffffffffffffffffffffffffffff1660a0840152608084015161216260c0850182612087565b5060a084015160e084015260c084015161010084015260e08401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0848303016101208501526121b28282611f55565b9150506101008401516121ca61014085018215159052565b5061012084015173ffffffffffffffffffffffffffffffffffffffff1661016084015261014090930151610180909201919091525090565b60208152815160208201525f60208301516101406040840152612229610160840182611f55565b905060408401517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08483030160608501526122648282611f55565b915050606084015161228e608085018273ffffffffffffffffffffffffffffffffffffffff169052565b50608084015173ffffffffffffffffffffffffffffffffffffffff811660a08501525060a084015173ffffffffffffffffffffffffffffffffffffffff811660c08501525060c084015160e084015260e08401516101008401526101008401516122fd61012085018215159052565b50610120840151801515610140850152509392505050565b7f4e487b71000000000000000000000000000000000000000000000000000000005f52603260045260245ffd5b5f82357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff21833603018112612374575f5ffd5b9190910192915050565b5f6020828403121561238e575f5ffd5b611ed282611a3c565b5f602082840312156123a7575f5ffd5b611ed282611a5f565b5f5f83357fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe18436030181126123e3575f5ffd5b83018035915067ffffffffffffffff8211156123fd575f5ffd5b602001915036819003821315612411575f5ffd5b9250929050565b5f5f85851115612426575f5ffd5b83861115612432575f5ffd5b5050820193919092039150565b80357fffffffff00000000000000000000000000000000000000000000000000000000811690600484101561249e577fffffffff00000000000000000000000000000000000000000000000000000000808560040360031b1b82161691505b5092915050565b5f602082840312156124b5575f5ffd5b5051919050565b818382375f910190815291905056fea264697066735822122034f337f1fa53cf0edc08a739b9af3130029c1a64e608920500ebc721e5658b3064736f6c634300081d0033";
    static readonly abi: readonly [{
        readonly type: "constructor";
        readonly inputs: readonly [{
            readonly name: "_spokePoolPeriphery";
            readonly type: "address";
            readonly internalType: "contract ISpokePoolPeriphery";
        }, {
            readonly name: "_spokePool";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "nonpayable";
    }, {
        readonly type: "function";
        readonly name: "ACROSS_CHAIN_ID_SOLANA";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "MULTIPLIER_BASE";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "uint256";
            readonly internalType: "uint256";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "SPOKE_POOL";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "address";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "SPOKE_POOL_PERIPHERY";
        readonly inputs: readonly [];
        readonly outputs: readonly [{
            readonly name: "";
            readonly type: "address";
            readonly internalType: "contract ISpokePoolPeriphery";
        }];
        readonly stateMutability: "view";
    }, {
        readonly type: "function";
        readonly name: "startBridgeTokensViaAcrossV4Swap";
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
            readonly name: "_acrossV4SwapData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossV4SwapFacet.AcrossV4SwapData";
            readonly components: readonly [{
                readonly name: "depositData";
                readonly type: "tuple";
                readonly internalType: "struct ISpokePoolPeriphery.BaseDepositData";
                readonly components: readonly [{
                    readonly name: "inputToken";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "outputToken";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "outputAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "depositor";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "recipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "exclusiveRelayer";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "quoteTimestamp";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "fillDeadline";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "exclusivityParameter";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "message";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "swapToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "exchange";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "transferType";
                readonly type: "uint8";
                readonly internalType: "enum ISpokePoolPeriphery.TransferType";
            }, {
                readonly name: "routerCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "minExpectedInputTokenAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "enableProportionalAdjustment";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "function";
        readonly name: "swapAndStartBridgeTokensViaAcrossV4Swap";
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
            readonly name: "_acrossV4SwapData";
            readonly type: "tuple";
            readonly internalType: "struct AcrossV4SwapFacet.AcrossV4SwapData";
            readonly components: readonly [{
                readonly name: "depositData";
                readonly type: "tuple";
                readonly internalType: "struct ISpokePoolPeriphery.BaseDepositData";
                readonly components: readonly [{
                    readonly name: "inputToken";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "outputToken";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "outputAmount";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "depositor";
                    readonly type: "address";
                    readonly internalType: "address";
                }, {
                    readonly name: "recipient";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "destinationChainId";
                    readonly type: "uint256";
                    readonly internalType: "uint256";
                }, {
                    readonly name: "exclusiveRelayer";
                    readonly type: "bytes32";
                    readonly internalType: "bytes32";
                }, {
                    readonly name: "quoteTimestamp";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "fillDeadline";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "exclusivityParameter";
                    readonly type: "uint32";
                    readonly internalType: "uint32";
                }, {
                    readonly name: "message";
                    readonly type: "bytes";
                    readonly internalType: "bytes";
                }];
            }, {
                readonly name: "swapToken";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "exchange";
                readonly type: "address";
                readonly internalType: "address";
            }, {
                readonly name: "transferType";
                readonly type: "uint8";
                readonly internalType: "enum ISpokePoolPeriphery.TransferType";
            }, {
                readonly name: "routerCalldata";
                readonly type: "bytes";
                readonly internalType: "bytes";
            }, {
                readonly name: "minExpectedInputTokenAmount";
                readonly type: "uint256";
                readonly internalType: "uint256";
            }, {
                readonly name: "outputAmountMultiplier";
                readonly type: "uint128";
                readonly internalType: "uint128";
            }, {
                readonly name: "enableProportionalAdjustment";
                readonly type: "bool";
                readonly internalType: "bool";
            }];
        }];
        readonly outputs: readonly [];
        readonly stateMutability: "payable";
    }, {
        readonly type: "event";
        readonly name: "AssetSwapped";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }, {
            readonly name: "dex";
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
        }, {
            readonly name: "timestamp";
            readonly type: "uint256";
            readonly indexed: false;
            readonly internalType: "uint256";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChain";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes";
            readonly indexed: false;
            readonly internalType: "bytes";
        }];
        readonly anonymous: false;
    }, {
        readonly type: "event";
        readonly name: "BridgeToNonEVMChainBytes32";
        readonly inputs: readonly [{
            readonly name: "transactionId";
            readonly type: "bytes32";
            readonly indexed: true;
            readonly internalType: "bytes32";
        }, {
            readonly name: "destinationChainId";
            readonly type: "uint256";
            readonly indexed: true;
            readonly internalType: "uint256";
        }, {
            readonly name: "receiver";
            readonly type: "bytes32";
            readonly indexed: false;
            readonly internalType: "bytes32";
        }];
        readonly anonymous: false;
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
        readonly name: "InvalidAmount";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidCallData";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidConfig";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidContract";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidNonEVMReceiver";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "InvalidReceiver";
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
        readonly name: "NullAddrIsNotAValidSpender";
        readonly inputs: readonly [];
    }, {
        readonly type: "error";
        readonly name: "ReentrancyError";
        readonly inputs: readonly [];
    }];
    static createInterface(): AcrossV4SwapFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): AcrossV4SwapFacet;
}
export {};
