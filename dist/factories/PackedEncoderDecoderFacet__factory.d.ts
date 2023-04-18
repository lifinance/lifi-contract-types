import { Signer, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { PackedEncoderDecoderFacet, PackedEncoderDecoderFacetInterface } from "../PackedEncoderDecoderFacet";
declare type PackedEncoderDecoderFacetConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class PackedEncoderDecoderFacet__factory extends ContractFactory {
    constructor(...args: PackedEncoderDecoderFacetConstructorParams);
    deploy(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): Promise<PackedEncoderDecoderFacet>;
    getDeployTransaction(overrides?: Overrides & {
        from?: PromiseOrValue<string>;
    }): TransactionRequest;
    attach(address: string): PackedEncoderDecoderFacet;
    connect(signer: Signer): PackedEncoderDecoderFacet__factory;
    static readonly bytecode = "0x608060405234801561001057600080fd5b506121e0806100206000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063bd6d15ca1161005b578063bd6d15ca146100ef578063be8a84ac14610110578063fc1ebe3e14610131578063fc852c5a1461014457600080fd5b806323bb8ec71461008d57806334ee5985146100b6578063402c55a4146100c957806371667c80146100dc575b600080fd5b6100a061009b366004611b04565b610157565b6040516100ad9190611c0c565b60405180910390f35b6100a06100c4366004611c26565b61045c565b6100a06100d7366004611cf0565b6106ac565b6100a06100ea366004611d85565b610a4f565b6101026100fd366004611e37565b610ea3565b6040516100ad929190611f6e565b61012361011e366004611e37565b6111fb565b6040516100ad929190611fd9565b61010261013f366004611e37565b611455565b610123610152366004611e37565b611751565b606063ffffffff67ffffffffffffffff871611156101fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084015b60405180910390fd5b6fffffffffffffffffffffffffffffffff84111561029c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e743132380000000000000000000000000000000000000060648201526084016101f3565b63ffffffff67ffffffffffffffff8416111561033a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e74333200000000000000000000000000000000000000000060648201526084016101f3565b7ff684869700000000000000000000000000000000000000000000000000000000896103658a612016565b604080517fffffffff0000000000000000000000000000000000000000000000000000000094851660208201527fffffffffffffffff0000000000000000000000000000000000000000000000009390931660248401527fffffffffffffffffffffffffffffffff00000000000000000000000000000000918216602c8401527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060609b8c1b8116603c85015260e09a8b1b85166050850152988b1b9098166054830152608096871b16606882015293871b811660788501529190951b16607c820152825180820390950185520190525092915050565b606063ffffffff67ffffffffffffffff851611156104fc576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101f3565b63ffffffff67ffffffffffffffff8416111561059a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602b60248201527f6e6f6e63652076616c75652070617373656420746f6f2062696720746f20666960448201527f7420696e2075696e74333200000000000000000000000000000000000000000060648201526084016101f3565b7e78afb600000000000000000000000000000000000000000000000000000000876105c488612016565b6040517fffffffff0000000000000000000000000000000000000000000000000000000093841660208201527fffffffffffffffff00000000000000000000000000000000000000000000000090921660248301527fffffffffffffffffffffffffffffffff0000000000000000000000000000000016602c8201527fffffffffffffffffffffffffffffffffffffffff000000000000000000000000606088901b16603c82015260e086811b8316605083015285811b8316605483015284901b919091166058820152605c0160405160208183030381529060405290509695505050505050565b606063ffffffff861115610742576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101f3565b6fffffffffffffffffffffffffffffffff8511156107e2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016101f3565b6fffffffffffffffffffffffffffffffff841115610882576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e743132380000000000000000000000000060648201526084016101f3565b6fffffffffffffffffffffffffffffffff831115610922576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e74313238000060648201526084016101f3565b7f161be542000000000000000000000000000000000000000000000000000000008a61094e8a8c612066565b604080517fffffffff0000000000000000000000000000000000000000000000000000000094851660208201527fffffffffffffffff0000000000000000000000000000000000000000000000009390931660248401527fffffffffffffffffffffffffffffffff00000000000000000000000000000000918216602c8401527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060609b8c1b8116603c85015260e09a909a1b9093166050830152608097881b8116605483015295871b861660648201529390951b909316607483015290941b90921660848401528051607881850301815260989093019052509392505050565b606063ffffffff881115610ae5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f64657374696e6174696f6e436861696e49642076616c7565207061737365642060448201527f746f6f2062696720746f2066697420696e2075696e743332000000000000000060648201526084016101f3565b6fffffffffffffffffffffffffffffffff861115610b85576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f616d6f756e742076616c75652070617373656420746f6f2062696720746f206660448201527f697420696e2075696e743132380000000000000000000000000000000000000060648201526084016101f3565b6fffffffffffffffffffffffffffffffff851115610c25576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603060248201527f626f6e6465724665652076616c75652070617373656420746f6f20626967207460448201527f6f2066697420696e2075696e743132380000000000000000000000000000000060648201526084016101f3565b6fffffffffffffffffffffffffffffffff841115610cc5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603360248201527f616d6f756e744f75744d696e2076616c75652070617373656420746f6f20626960448201527f6720746f2066697420696e2075696e743132380000000000000000000000000060648201526084016101f3565b6fffffffffffffffffffffffffffffffff831115610d65576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603e60248201527f64657374696e6174696f6e416d6f756e744f75744d696e2076616c756520706160448201527f7373656420746f6f2062696720746f2066697420696e2075696e74313238000060648201526084016101f3565b7fc5ae0fe6000000000000000000000000000000000000000000000000000000008c610d918c8e612066565b604080517fffffffff0000000000000000000000000000000000000000000000000000000094851660208201527fffffffffffffffff0000000000000000000000000000000000000000000000009390931660248401527fffffffffffffffffffffffffffffffff00000000000000000000000000000000918216602c8401527fffffffffffffffffffffffffffffffffffffffff00000000000000000000000060609d8e1b8116603c85015260e09c909c1b9093166050830152988b1b8a166054820152608097881b8916606882015295871b8816607887015293861b8716608886015250931b9093166098820152931b90911660a88301528051609c81840301815260bc90920190529392505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e081018290526101008101829052610120810191909152610f446040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b609c831015610fd5576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e67746800000000000000000000000000000000000000000000000060648201526084016101f3565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526110766040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b611084600c600487896120ae565b61108d916120d8565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526110bf601c600c87896120ae565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060408301526111066030601c87896120ae565b61110f9161211e565b60601c60a08301526111256034603087896120ae565b61112e91612164565b60e090811c908301526111456048603487896120ae565b61114e9161211e565b60601c60808301526111646058604887896120ae565b61116d91612066565b60801c60c08301526111836068605887896120ae565b61118c91612066565b60801c815261119f6078606887896120ae565b6111a891612066565b60801c60208201526111be6088607887896120ae565b6111c791612066565b60801c60608201526111dd609c608887896120ae565b6111e69161211e565b60601c60a082015290925090505b9250929050565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e0830182905261010083018290526101208301829052835180850190945281845283015290603c8310156112ed576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e67746800000000000000000000000000000000000000000000000060648201526084016101f3565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e083018290526101008301829052610120830182905283518085019094528184528301529061135c600c600487896120ae565b611365916120d8565b7fffffffffffffffff000000000000000000000000000000000000000000000000168252611397601c600c87896120ae565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060408301526113de6030601c87896120ae565b6113e79161211e565b60601c60a08301526113fd6034603087896120ae565b61140691612164565b60e090811c9083015261141d6038603487896120ae565b61142691612164565b60e01c602082015261143c603c603887896120ae565b61144591612164565b60e01c8152909590945092505050565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526114f66040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b6078831015611587576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602860248201527f646174612070617373656420696e206973206e6f742074686520636f7272656360448201527f74206c656e67746800000000000000000000000000000000000000000000000060648201526084016101f3565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e0810182905261010081018290526101208101919091526116286040518060c001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff1681525090565b611636600c600487896120ae565b61163f916120d8565b7fffffffffffffffff000000000000000000000000000000000000000000000000168252611671601c600c87896120ae565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060408301526116b86030601c87896120ae565b6116c19161211e565b60601c60a08301526116d76034603087896120ae565b6116e091612164565b60e090811c908301526116f76044603487896120ae565b61170091612066565b60801c81526117136054604487896120ae565b61171c91612066565b60801c60208201526117326064605487896120ae565b61173b91612066565b60801c60608201526111dd6078606487896120ae565b604080516101408101825260008082526060602083018190529282018390529181018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915260408051808201909152600080825260208201526060831015611848576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f6461746120706173736564206973206e6f742074686520636f7272656374206c60448201527f656e67746800000000000000000000000000000000000000000000000000000060648201526084016101f3565b60408051610140810182526000808252606060208084018290528385018290529083018290526080830182905260a0830182905260c0830182905260e08301829052610100830182905261012083018290528351808501909452818452830152906118b7600c600487896120ae565b6118c0916120d8565b7fffffffffffffffff0000000000000000000000000000000000000000000000001682526118f2601c600c87896120ae565b8080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201919091525050505060408301526119396030601c87896120ae565b6119429161211e565b60601c60a08301526119586034603087896120ae565b61196191612164565b60e090811c908301526119786048603487896120ae565b6119819161211e565b60601c60808301526119976058604887896120ae565b6119a091612066565b60801c60c08301526119b6605c605887896120ae565b6119bf91612164565b60e01c602082015261143c6060605c87896120ae565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f830112611a1557600080fd5b813567ffffffffffffffff80821115611a3057611a306119d5565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f01168101908282118183101715611a7657611a766119d5565b81604052838152866020858801011115611a8f57600080fd5b836020870160208301376000602085830101528094505050505092915050565b803573ffffffffffffffffffffffffffffffffffffffff81168114611ad357600080fd5b919050565b803567ffffffffffffffff81168114611ad357600080fd5b803563ffffffff81168114611ad357600080fd5b600080600080600080600080610100898b031215611b2157600080fd5b88359750602089013567ffffffffffffffff811115611b3f57600080fd5b611b4b8b828c01611a04565b975050611b5a60408a01611aaf565b9550611b6860608a01611ad8565b9450611b7660808a01611aaf565b935060a08901359250611b8b60c08a01611ad8565b9150611b9960e08a01611af0565b90509295985092959890939650565b6000815180845260005b81811015611bce57602081850181015186830182015201611bb2565b5060006020828601015260207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f83011685010191505092915050565b602081526000611c1f6020830184611ba8565b9392505050565b60008060008060008060c08789031215611c3f57600080fd5b86359550602087013567ffffffffffffffff811115611c5d57600080fd5b611c6989828a01611a04565b955050611c7860408801611aaf565b9350611c8660608801611ad8565b9250611c9460808801611ad8565b9150611ca260a08801611af0565b90509295509295509295565b60008083601f840112611cc057600080fd5b50813567ffffffffffffffff811115611cd857600080fd5b6020830191508360208285010111156111f457600080fd5b60008060008060008060008060006101008a8c031215611d0f57600080fd5b8935985060208a013567ffffffffffffffff811115611d2d57600080fd5b611d398c828d01611cae565b9099509750611d4c905060408b01611aaf565b955060608a0135945060808a0135935060a08a0135925060c08a01359150611d7660e08b01611aaf565b90509295985092959850929598565b60008060008060008060008060008060006101408c8e031215611da757600080fd5b8b359a5060208c013567ffffffffffffffff811115611dc557600080fd5b611dd18e828f01611cae565b909b509950611de4905060408d01611aaf565b975060608c01359650611df960808d01611aaf565b955060a08c0135945060c08c0135935060e08c013592506101008c01359150611e256101208d01611aaf565b90509295989b509295989b9093969950565b60008060208385031215611e4a57600080fd5b823567ffffffffffffffff811115611e6157600080fd5b611e6d85828601611cae565b90969095509350505050565b6000610140825184526020830151816020860152611e9982860182611ba8565b91505060408301518482036040860152611eb38282611ba8565b9150506060830151611edd606086018273ffffffffffffffffffffffffffffffffffffffff169052565b506080830151611f05608086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060a0830151611f2d60a086018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160c085015260e083015160e085015261010080840151611f568287018215159052565b50506101209283015115159390920192909252919050565b60e081526000611f8160e0830185611e79565b905082516020830152602083015160408301526040830151606083015260608301516080830152608083015160a083015273ffffffffffffffffffffffffffffffffffffffff60a08401511660c08301529392505050565b606081526000611fec6060830185611e79565b905063ffffffff835116602083015267ffffffffffffffff60208401511660408301529392505050565b6000815160208301517fffffffffffffffffffffffffffffffff000000000000000000000000000000008082169350601083101561205e5780818460100360031b1b83161693505b505050919050565b7fffffffffffffffffffffffffffffffff0000000000000000000000000000000081358181169160108510156120a65780818660100360031b1b83161692505b505092915050565b600080858511156120be57600080fd5b838611156120cb57600080fd5b5050820193919092039150565b7fffffffffffffffff00000000000000000000000000000000000000000000000081358181169160088510156120a65760089490940360031b84901b1690921692915050565b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000081358181169160148510156120a65760149490940360031b84901b1690921692915050565b7fffffffff0000000000000000000000000000000000000000000000000000000081358181169160048510156120a65760049490940360031b84901b169092169291505056fea2646970667358221220de398fe8c3f5952b758144d3225bb5fd3107d4ba4f0c1f1e57fac22272043ef164736f6c63430008110033";
    static readonly abi: readonly [{
        readonly anonymous: false;
        readonly inputs: readonly [{
            readonly indexed: true;
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiGenericSwapCompleted";
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
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "string";
            readonly name: "referrer";
            readonly type: "string";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "fromAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "address";
            readonly name: "toAssetId";
            readonly type: "address";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "fromAmount";
            readonly type: "uint256";
        }, {
            readonly indexed: false;
            readonly internalType: "uint256";
            readonly name: "toAmount";
            readonly type: "uint256";
        }];
        readonly name: "LiFiSwappedGeneric";
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
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaCBridgeERC20Packed";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "maxSlippage";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaCBridgeNativePacked";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint32";
                readonly name: "maxSlippage";
                readonly type: "uint32";
            }, {
                readonly internalType: "uint64";
                readonly name: "nonce";
                readonly type: "uint64";
            }];
            readonly internalType: "struct CBridgeFacet.CBridgeData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaHopL2ERC20Packed";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "bonderFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationDeadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract IHopBridge";
                readonly name: "hopBridge";
                readonly type: "address";
            }];
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "_data";
            readonly type: "bytes";
        }];
        readonly name: "decode_startBridgeTokensViaHopL2NativePacked";
        readonly outputs: readonly [{
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
            readonly name: "";
            readonly type: "tuple";
        }, {
            readonly components: readonly [{
                readonly internalType: "uint256";
                readonly name: "bonderFee";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "amountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "deadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationAmountOutMin";
                readonly type: "uint256";
            }, {
                readonly internalType: "uint256";
                readonly name: "destinationDeadline";
                readonly type: "uint256";
            }, {
                readonly internalType: "contract IHopBridge";
                readonly name: "hopBridge";
                readonly type: "address";
            }];
            readonly internalType: "struct HopFacetOptimized.HopData";
            readonly name: "";
            readonly type: "tuple";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "encode_startBridgeTokensViaCBridgeERC20Packed";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint64";
            readonly name: "destinationChainId";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint64";
            readonly name: "nonce";
            readonly type: "uint64";
        }, {
            readonly internalType: "uint32";
            readonly name: "maxSlippage";
            readonly type: "uint32";
        }];
        readonly name: "encode_startBridgeTokensViaCBridgeNativePacked";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "sendingAssetId";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "minAmount";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "encode_startBridgeTokensViaHopL2ERC20Packed";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }, {
        readonly inputs: readonly [{
            readonly internalType: "bytes32";
            readonly name: "transactionId";
            readonly type: "bytes32";
        }, {
            readonly internalType: "string";
            readonly name: "integrator";
            readonly type: "string";
        }, {
            readonly internalType: "address";
            readonly name: "receiver";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationChainId";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "bonderFee";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "amountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "destinationAmountOutMin";
            readonly type: "uint256";
        }, {
            readonly internalType: "address";
            readonly name: "hopBridge";
            readonly type: "address";
        }];
        readonly name: "encode_startBridgeTokensViaHopL2NativePacked";
        readonly outputs: readonly [{
            readonly internalType: "bytes";
            readonly name: "";
            readonly type: "bytes";
        }];
        readonly stateMutability: "pure";
        readonly type: "function";
    }];
    static createInterface(): PackedEncoderDecoderFacetInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): PackedEncoderDecoderFacet;
}
export {};
